<?php

namespace App\Twig;

use App\Repository\ConversationRepository;
use Symfony\Bundle\SecurityBundle\Security;
use Twig\Extension\AbstractExtension;
use Twig\Extension\GlobalsInterface;

class GlobalVariablesExtension extends AbstractExtension implements GlobalsInterface
{
    public function __construct
    (
        private Security $security,
        private ConversationRepository $conversationRepository,
    ) 
    {
        
    }

    public function getGlobals(): array
    {
        $user = $this->security->getUser();

        if (!$user) {
            return ['unreadMessagesCount' => 0];
        }

        $conversations = $this->conversationRepository->findByUser($user);
        $unread = 0;

        foreach ($conversations as $conversation) {
            $lastMessage = $conversation->getLastMessage();
            if (!$lastMessage) continue;

            foreach ($conversation->getParticipants() as $participant) {
                if ($participant->getUser() === $user) {
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

        return ['unreadMessagesCount' => $unread];
    }
}