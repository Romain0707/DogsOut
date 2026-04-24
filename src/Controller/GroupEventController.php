<?php

namespace App\Controller;

use App\Entity\GroupEvent;
use App\Entity\GroupEventResponse;
use App\Entity\UserGroup;
use App\Form\GroupEventType;
use App\Repository\GroupEventRepository;
use App\Repository\GroupMemberRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/groupes/{groupId}/evenements')]
final class GroupEventController extends AbstractController
{
    public function __construct
    (
        private Security $security,
        private EntityManagerInterface $em,
    ) 
    {

    }
    #[Route('/new', name: 'app_group_event_new', methods: ['GET', 'POST'])]
    public function new(int $groupId, Request $request, GroupMemberRepository $memberRepository): Response 
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();
        $group       = $this->em->getRepository(UserGroup::class)->find($groupId);

        if (!$group) throw $this->createNotFoundException();

        $membership = $memberRepository->findMembership($group, $currentUser);
        if (!$membership || $membership->getStatus() !== 'active') {
            throw $this->createAccessDeniedException('Vous devez être membre actif pour proposer un événement.');
        }

        $event = new GroupEvent();
        $form  = $this->createForm(GroupEventType::class, $event);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $event->setUsergroup($group);
            $event->setProposedBy($currentUser);
            $event->setCreatedAt(new \DateTimeImmutable());

            $this->em->persist($event);
            $this->em->flush();

            $this->addFlash('success', 'Événement proposé !');

            return $this->redirectToRoute('app_group_show', ['id' => $groupId]);
        }

        return $this->render('group/event/new.html.twig', [
            'form'  => $form,
            'group' => $group,
        ]);
    }

    #[Route('/{eventId}/respond', name: 'app_group_event_respond', methods: ['POST'])]
    public function respond(int $groupId, int $eventId, Request $request, GroupMemberRepository $memberRepository): Response 
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();
        $event       = $this->em->getRepository(GroupEvent::class)->find($eventId);

        if (!$event || $event->getUsergroup()->getId() !== $groupId) {
            throw $this->createNotFoundException();
        }

        $group      = $event->getUsergroup();
        $membership = $memberRepository->findMembership($group, $currentUser);

        if (!$membership || $membership->getStatus() !== 'active') {
            throw $this->createAccessDeniedException();
        }

        $availability = $request->request->get('availability');
        if (!in_array($availability, ['available', 'unavailable', 'maybe'])) {
            return $this->redirectToRoute('app_group_show', ['id' => $groupId]);
        }

        $existing = $this->em->getRepository(GroupEventResponse::class)->findOneBy([
            'groupEvent' => $event,
            'user'       => $currentUser,
        ]);

        if ($existing) {
            $existing->setAvailability($availability);
            $existing->setRespondedAt(new \DateTimeImmutable());
        } else {
            $response = new GroupEventResponse();
            $response->setGroupEvent($event);
            $response->setUser($currentUser);
            $response->setAvailability($availability);
            $response->setRespondedAt(new \DateTimeImmutable());
            $this->em->persist($response);
        }

        $this->em->flush();

        $this->addFlash('success', 'Réponse enregistrée !');

        return $this->redirectToRoute('app_group_show', ['id' => $groupId]);
    }

    #[Route('/{eventId}/delete', name: 'app_group_event_delete', methods: ['POST'])]
    public function delete(int $groupId, int $eventId, Request $request, GroupMemberRepository $memberRepository): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->security->getUser();
        $event       = $this->em->getRepository(GroupEvent::class)->find($eventId);

        if (!$event || $event->getUsergroup()->getId() !== $groupId) {
            throw $this->createNotFoundException();
        }

        $group = $event->getUsergroup();
        $isAdminOrModo = $memberRepository->isAdminOrModerator($group, $currentUser);
        $isCreator     = $event->getProposedBy() === $currentUser;

        if (!$isAdminOrModo && !$isCreator) {
            throw $this->createAccessDeniedException();
        }

        if ($this->isCsrfTokenValid('delete_event_' . $event->getId(), $request->request->get('_token'))) {
            $this->em->remove($event);
            $this->em->flush();
            $this->addFlash('success', 'Événement supprimé.');
        }

        return $this->redirectToRoute('app_group_show', ['id' => $groupId]);
    }
}