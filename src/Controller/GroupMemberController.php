<?php

namespace App\Controller;

use App\Entity\GroupMember;
use App\Entity\Participant;
use App\Entity\UserGroup;
use App\Repository\GroupMemberRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/groupes/{groupId}/membres')]
final class GroupMemberController extends AbstractController
{
    public function __construct
    (
        private Security $security,
        private EntityManagerInterface $em,
    ) 
    {

    }

    #[Route('/{memberId}/approve', name: 'app_group_member_approve', methods: ['POST'])]
    public function approve(int $groupId, int $memberId, GroupMemberRepository $memberRepository): Response 
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();
        $member      = $memberRepository->find($memberId);

        if (!$member || $member->getUsergroup()->getId() !== $groupId) {
            throw $this->createNotFoundException();
        }

        $group = $member->getUsergroup();

        if (!$memberRepository->isAdminOrModerator($group, $currentUser)) {
            throw $this->createAccessDeniedException();
        }

        $member->setStatus('active');

        if ($group->getConversation()) {
            $participant = new Participant();
            $participant->setUser($member->getUser());
            $participant->setRole('member');
            $group->getConversation()->addParticipant($participant);
            $this->em->persist($participant);
        }

        $this->em->flush();

        $this->addFlash('success', $member->getUser()->getUsername() . ' a été accepté dans le groupe.');

        return $this->redirectToRoute('app_group_show', ['id' => $groupId]);
    }

    #[Route('/{memberId}/reject', name: 'app_group_member_reject', methods: ['POST'])]
    public function reject( int $groupId, int $memberId, GroupMemberRepository $memberRepository): Response 
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();
        $member      = $memberRepository->find($memberId);

        if (!$member || $member->getUsergroup()->getId() !== $groupId) {
            throw $this->createNotFoundException();
        }

        if (!$memberRepository->isAdminOrModerator($member->getUsergroup(), $currentUser)) {
            throw $this->createAccessDeniedException();
        }

        $this->em->remove($member);
        $this->em->flush();

        $this->addFlash('success', 'Demande refusée.');

        return $this->redirectToRoute('app_group_show', ['id' => $groupId]);
    }

    #[Route('/{memberId}/promote', name: 'app_group_member_promote', methods: ['POST'])]
    public function promote(int $groupId, int $memberId, GroupMemberRepository $memberRepository): Response 
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();
        $member      = $memberRepository->find($memberId);

        if (!$member || $member->getUsergroup()->getId() !== $groupId) {
            throw $this->createNotFoundException();
        }

        $group = $member->getUsergroup();

        $myMembership = $memberRepository->findMembership($group, $currentUser);
        if (!$myMembership || $myMembership->getRole() !== 'admin') {
            throw $this->createAccessDeniedException();
        }

        $newRole = match($member->getRole()) {
            'member'    => 'moderator',
            'moderator' => 'admin',
            default     => $member->getRole(),
        };

        $member->setRole($newRole);
        $this->em->flush();

        $this->addFlash('success', $member->getUser()->getUsername() . ' est maintenant ' . $newRole . '.');

        return $this->redirectToRoute('app_group_show', ['id' => $groupId]);
    }

    #[Route('/{memberId}/demote', name: 'app_group_member_demote', methods: ['POST'])]
    public function demote(int $groupId, int $memberId, GroupMemberRepository $memberRepository): Response 
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();
        $member      = $memberRepository->find($memberId);

        if (!$member || $member->getUsergroup()->getId() !== $groupId) {
            throw $this->createNotFoundException();
        }

        $group = $member->getUsergroup();

        $myMembership = $memberRepository->findMembership($group, $currentUser);
        if (!$myMembership || $myMembership->getRole() !== 'admin') {
            throw $this->createAccessDeniedException();
        }

        if ($member->getUser() === $group->getCreatedBy()) {
            $this->addFlash('error', 'Impossible de rétrograder le créateur du groupe.');
            return $this->redirectToRoute('app_group_show', ['id' => $groupId]);
        }

        $newRole = match($member->getRole()) {
            'admin'     => 'moderator',
            'moderator' => 'member',
            default     => $member->getRole(),
        };

        $member->setRole($newRole);
        $this->em->flush();

        $this->addFlash('success', $member->getUser()->getUsername() . ' est maintenant ' . $newRole . '.');

        return $this->redirectToRoute('app_group_show', ['id' => $groupId]);
    }

    #[Route('/{memberId}/kick', name: 'app_group_member_kick', methods: ['POST'])]
    public function kick(int $groupId, int $memberId, GroupMemberRepository $memberRepository): Response 
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();
        $member      = $memberRepository->find($memberId);

        if (!$member || $member->getUsergroup()->getId() !== $groupId) {
            throw $this->createNotFoundException();
        }

        $group = $member->getUsergroup();

        if (!$memberRepository->isAdminOrModerator($group, $currentUser)) {
            throw $this->createAccessDeniedException();
        }

        if ($member->getUser() === $group->getCreatedBy()) {
            $this->addFlash('error', 'Impossible d\'expulser le créateur du groupe.');
            return $this->redirectToRoute('app_group_show', ['id' => $groupId]);
        }

        $username = $member->getUser()->getUsername();
        $this->em->remove($member);
        $this->em->flush();

        $this->addFlash('success', $username . ' a été expulsé du groupe.');

        return $this->redirectToRoute('app_group_show', ['id' => $groupId]);
    }
}