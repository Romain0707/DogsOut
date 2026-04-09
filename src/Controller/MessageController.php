<?php

namespace App\Controller;

use App\Entity\Conversation;
use App\Entity\Message;
use App\Entity\Participant;
use App\Repository\ConversationRepository;
use App\Repository\MessageRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/messages')]
final class MessageController extends AbstractController
{
    public function __construct(
        private Security $security,
        private EntityManagerInterface $em,
    ) {}

    /**
     * Liste de toutes les conversations de l'utilisateur connecté
     */
    #[Route('', name: 'app_message_index', methods: ['GET'])]
    public function index(ConversationRepository $conversationRepository): Response
    {
        $user = $this->security->getUser();

        return $this->render('message/index.html.twig', [
            'conversations' => $conversationRepository->findByUser($user),
            'user'          => $user,
        ]);
    }

    /**
     * Ouvre (ou crée) une conversation privée avec un autre utilisateur
     */
    #[Route('/with/{id}', name: 'app_message_with', methods: ['GET'])]
    public function startWith(
        int $id,
        UserRepository $userRepository,
        ConversationRepository $conversationRepository,
    ): Response {
        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();
        $otherUser   = $userRepository->find($id);

        if (!$otherUser || $otherUser === $currentUser) {
            throw $this->createNotFoundException('Utilisateur introuvable.');
        }

        // Cherche une conversation privée existante
        $conversation = $conversationRepository->findPrivateConversation($currentUser, $otherUser);

        // Sinon on en crée une nouvelle
        if (!$conversation) {
            $conversation = new Conversation(); // title null = privée

            $p1 = (new Participant())->setUser($currentUser)->setRole('admin');
            $p2 = (new Participant())->setUser($otherUser)->setRole('admin');

            $conversation->addParticipant($p1);
            $conversation->addParticipant($p2);

            $this->em->persist($p1);
            $this->em->persist($p2);
            $this->em->persist($conversation);
            $this->em->flush();
        }

        return $this->redirectToRoute('app_message_show', ['id' => $conversation->getId()]);
    }

    /**
     * Affiche une conversation et ses messages
     */
    #[Route('/{id}', name: 'app_message_show', methods: ['GET'])]
    public function show(
        Conversation $conversation,
        MessageRepository $messageRepository,
        ConversationRepository $conversationRepository,
    ): Response {
        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();

        if (!$conversation->hasParticipant($currentUser)) {
            throw $this->createAccessDeniedException();
        }

        foreach ($conversation->getParticipants() as $participant) {
            if ($participant->getUser() === $currentUser) {
                $participant->setLastReadAt(new \DateTimeImmutable());
                $this->em->flush();
                break;
            }
        }

        return $this->render('message/show.html.twig', [
            'conversation'  => $conversation,
            'conversations' => $conversationRepository->findByUser($currentUser),
            'messages'      => $messageRepository->findByConversation($conversation),
            'user'          => $currentUser,
        ]);
    }

    /**
     * Envoie un message dans une conversation (POST)
     */
    #[Route('/{id}/send', name: 'app_message_send', methods: ['POST'])]
    public function send(
        Conversation $conversation,
        Request $request,
    ): Response {
        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();

        if (!$conversation->hasParticipant($currentUser)) {
            throw $this->createAccessDeniedException();
        }

        $content = trim($request->request->get('content', ''));

        if ($content === '') {
            return $this->redirectToRoute('app_message_show', ['id' => $conversation->getId()]);
        }

        $message = new Message();
        $message->setContent($content);
        $message->setAuthor($currentUser);
        $message->setConversation($conversation);

        $this->em->persist($message);
        $this->em->flush();

        // Récupère les autres participants pour leurs envoyer la notif
        $topics = ['conversation/' . $conversation->getId()];
        foreach ($conversation->getParticipants() as $participant) {
            if ($participant->getUser() !== $currentUser) {
                $topics[] = 'user/' . $participant->getUser()->getId() . '/notifications';
            }
        }

        return $this->redirectToRoute('app_message_show', ['id' => $conversation->getId()]);
    }

    #[Route('/api/unread-count', name: 'app_message_unread_count', methods: ['GET'])]
    public function unreadCount(ConversationRepository $conversationRepository): Response
    {
        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();

        if (!$currentUser) {
            return $this->json(['count' => 0]);
        }

        $conversations = $conversationRepository->findByUser($currentUser);
        $unread = 0;

        foreach ($conversations as $conversation) {
            $lastMessage = $conversation->getLastMessage();
            if (!$lastMessage) continue;

            foreach ($conversation->getParticipants() as $participant) {
                if ($participant->getUser() === $currentUser) {
                    if (
                        $participant->getLastReadAt() === null ||
                        $lastMessage->getCreatedAt() > $participant->getLastReadAt()
                    ) {
                        $unread++;
                    }
                    break;
                }
            }
        }

        return $this->json(['count' => $unread]);
    }

    #[Route('/{id}/mark-read', name: 'app_message_mark_read', methods: ['POST'])]
    public function markRead(Conversation $conversation): Response
    {
        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();

        if (!$conversation->hasParticipant($currentUser)) {
            throw $this->createAccessDeniedException();
        }

        foreach ($conversation->getParticipants() as $participant) {
            if ($participant->getUser() === $currentUser) {
                $participant->setLastReadAt(new \DateTimeImmutable());
                $this->em->flush();
                break;
            }
        }

        return $this->json(['ok' => true]);
    }

    #[Route('/{id}/poll', name: 'app_message_poll', methods: ['GET'])]
    public function poll(
        Conversation $conversation,
        Request $request,
        MessageRepository $messageRepository,
    ): Response {
        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();

        if (!$conversation->hasParticipant($currentUser)) {
            throw $this->createAccessDeniedException();
        }

        $since = (int) $request->query->get('since', 0);

        // Récupère uniquement les messages après l'ID donné
        $messages = $messageRepository->findAfter($conversation, $since);

        // Marque comme lu
        foreach ($conversation->getParticipants() as $participant) {
            if ($participant->getUser() === $currentUser) {
                $participant->setLastReadAt(new \DateTimeImmutable());
                break;
            }
        }
        $this->em->flush();

        $data = array_map(fn(Message $m) => [
            'id'           => $m->getId(),
            'content'      => $m->getContent(),
            'author'       => $m->getAuthor()->getUsername(),
            'authorId'     => $m->getAuthor()->getId(),
            'authorAvatar' => $m->getAuthor()->getImageName()
                ? '/uploads/images/' . $m->getAuthor()->getImageName()
                : '/profil/default-avatar.png',
            'createdAt'    => $m->getCreatedAt()->format('H:i'),
        ], $messages);

        return $this->json($data);
    }
}