<?php

namespace App\Controller;

use App\Entity\Conversation;
use App\Entity\GroupMember;
use App\Entity\Participant;
use App\Entity\UserGroup;
use App\Form\UserGroupType;
use App\Repository\GroupMemberRepository;
use App\Repository\GroupEventRepository;
use App\Repository\UserGroupRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/groupes')]
final class UserGroupController extends AbstractController
{
    public function __construct
    (
        private Security $security,
        private EntityManagerInterface $em,
    ) 
    {

    }


    #[Route('', name: 'app_group_index')]
    public function index(UserGroupRepository $groupRepository): Response 
    {
        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();

        return $this->render('group/index.html.twig', [
            'publicGroups' => $groupRepository->findPublic(),
            'myGroups'     => $currentUser ? $groupRepository->findByMember($currentUser) : [],
        ]);
    }

    #[Route('/new', name: 'app_group_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();

        $group = new UserGroup();
        $form  = $this->createForm(UserGroupType::class, $group);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $group->setCreatedBy($currentUser);

            $conversation = new Conversation();
            $conversation->setTitle($group->getName());

            $participant = new Participant();
            $participant->setUser($currentUser);
            $participant->setRole('admin');
            $conversation->addParticipant($participant);

            $this->em->persist($participant);
            $this->em->persist($conversation);

            $group->setConversation($conversation);
            $this->em->persist($group);

            $member = new GroupMember();
            $member->setUser($currentUser);
            $member->setUsergroup($group);
            $member->setRole('admin');
            $member->setStatus('active');

            $this->em->persist($member);
            $this->em->flush();

            $this->addFlash('success', 'Groupe créé avec succès !');

            return $this->redirectToRoute('app_group_show', ['id' => $group->getId()]);
        }

        return $this->render('group/new.html.twig', [
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_group_show')]
    public function show(UserGroup $group, GroupMemberRepository $memberRepository, GroupEventRepository $eventRepository): Response 
    {
        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();

        $membership      = $currentUser ? $memberRepository->findMembership($group, $currentUser) : null;
        $isActiveMember  = $membership && $membership->getStatus() === 'active';
        $isAdminOrModo   = $currentUser ? $memberRepository->isAdminOrModerator($group, $currentUser) : false;
        $pendingRequests = $isAdminOrModo ? $memberRepository->findPendingRequests($group) : [];
        $activeMembers   = $memberRepository->findActiveMembers($group);
        $upcomingEvents  = $eventRepository->findUpcoming($group);
        $pastEvents      = $eventRepository->findPast($group);

        return $this->render('group/show.html.twig', [
            'group'           => $group,
            'membership'      => $membership,
            'isActiveMember'  => $isActiveMember,
            'isAdminOrModo'   => $isAdminOrModo,
            'pendingRequests' => $pendingRequests,
            'activeMembers'   => $activeMembers,
            'upcomingEvents'  => $upcomingEvents,
            'pastEvents'      => $pastEvents,
        ]);
    }

    #[Route('/{id}/join', name: 'app_group_join', methods: ['POST'])]
    public function join(UserGroup $group, GroupMemberRepository $memberRepository): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();

        $existing = $memberRepository->findMembership($group, $currentUser);
        if ($existing) {
            $this->addFlash('info', 'Vous êtes déjà membre ou votre demande est en attente.');
            return $this->redirectToRoute('app_group_show', ['id' => $group->getId()]);
        }

        $member = new GroupMember();
        $member->setUser($currentUser);
        $member->setUsergroup($group);
        $member->setRole('member');
        $member->setStatus($group->isPublic() ? 'active' : 'pending');

        if ($group->isPublic() && $group->getConversation()) {
            $participant = new Participant();
            $participant->setUser($currentUser);
            $participant->setRole('member');
            $group->getConversation()->addParticipant($participant);
            $this->em->persist($participant);
        }

        $this->em->persist($member);
        $this->em->flush();

        $message = $group->isPublic()
            ? 'Vous avez rejoint le groupe !'
            : 'Votre demande a été envoyée, en attente de validation.';

        $this->addFlash('success', $message);

        return $this->redirectToRoute('app_group_show', ['id' => $group->getId()]);
    }

    #[Route('/{id}/leave', name: 'app_group_leave', methods: ['POST'])]
    public function leave(UserGroup $group, GroupMemberRepository $memberRepository): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();

        $membership = $memberRepository->findMembership($group, $currentUser);

        if (!$membership) {
            return $this->redirectToRoute('app_group_show', ['id' => $group->getId()]);
        }

        if ($membership->getRole() === 'admin' && $group->getCreatedBy() === $currentUser) {
            $this->addFlash('error', 'Le créateur du groupe ne peut pas le quitter. Supprimez le groupe à la place.');
            return $this->redirectToRoute('app_group_show', ['id' => $group->getId()]);
        }

        $this->em->remove($membership);
        $this->em->flush();

        $this->addFlash('success', 'Vous avez quitté le groupe.');

        return $this->redirectToRoute('app_group_index');
    }

    #[Route('/{id}/edit', name: 'app_group_edit', methods: ['GET', 'POST'])]
    public function edit(UserGroup $group, Request $request, GroupMemberRepository $memberRepository): Response 
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();

        if (!$memberRepository->isAdminOrModerator($group, $currentUser)) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(UserGroupType::class, $group);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($group->getConversation()) {
                $group->getConversation()->setTitle($group->getName());
            }
            $this->em->flush();
            $this->addFlash('success', 'Groupe mis à jour.');
            return $this->redirectToRoute('app_group_show', ['id' => $group->getId()]);
        }

        return $this->render('group/edit.html.twig', [
            'group' => $group,
            'form'  => $form,
        ]);
    }

    #[Route('/{id}/delete', name: 'app_group_delete', methods: ['POST'])]
    public function delete(UserGroup $group, Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();

        if ($group->getCreatedBy() !== $currentUser) {
            throw $this->createAccessDeniedException();
        }

        if ($this->isCsrfTokenValid('delete_group_' . $group->getId(), $request->request->get('_token'))) {
            $this->em->remove($group);
            $this->em->flush();
            $this->addFlash('success', 'Groupe supprimé.');
        }

        return $this->redirectToRoute('app_group_index');
    }
}