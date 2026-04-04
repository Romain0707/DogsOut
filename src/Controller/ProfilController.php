<?php

namespace App\Controller;

use App\Form\UserProfileType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ProfilController extends AbstractController
{
    #[Route('/profil', name: 'profil')]
    public function index(Security $security): Response
    {
        $user = $security->getUser();

        return $this->render('profil/index.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/profil/edit', name: 'profil_edit', methods: ['GET', 'POST'])]
    public function edit(
        Request $request,
        Security $security,
        EntityManagerInterface $em,
    ): Response {
        /** @var \App\Entity\User $user */
        $user = $security->getUser();

        $form = $this->createForm(UserProfileType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em->flush();

            $this->addFlash('success', 'Profil mis à jour avec succès !');

            return $this->redirectToRoute('profil');
        }

        return $this->render('profil/edit.html.twig', [
            'form' => $form,
            'user' => $user,
        ]);
    }

    #[Route('/profil/{id}', name: 'profil_public', requirements: ['id' => '\d+'])]
    public function public(int $id, UserRepository $userRepository, Security $security): Response
    {
        $currentUser = $security->getUser();
        $user        = $userRepository->find($id);

        if (!$user) {
            throw $this->createNotFoundException('Utilisateur introuvable.');
        }

        if ($user === $currentUser) {
            return $this->redirectToRoute('profil');
        }

        return $this->render('profil/public.html.twig', [
            'user'        => $user,
            'currentUser' => $currentUser,
        ]);
    }
}