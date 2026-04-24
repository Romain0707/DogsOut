<?php

namespace App\Controller;

use App\Entity\Chien;
use App\Form\ChienType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/chien')]
final class ChienController extends AbstractController
{
    #[Route('/new', name: 'app_chien_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, Security $security): Response
    {
        $chien = new Chien();
        $form = $this->createForm(ChienType::class, $chien);
        $form->handleRequest($request);
        $user = $security->getUser();

        if ($form->isSubmitted() && $form->isValid()) {
            $chien->setUser($this->getUser());
            $user->setFirstConnexion(false);
            $entityManager->persist($chien);
            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('home', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('chien/new.html.twig', [
            'chien' => $chien,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_chien_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Chien $chien, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ChienType::class, $chien);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('home', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('chien/edit.html.twig', [
            'chien' => $chien,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_chien_delete', methods: ['POST'])]
    public function delete(Request $request, Chien $chien, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$chien->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($chien);
            $entityManager->flush();
        }

        return $this->redirectToRoute('home', [], Response::HTTP_SEE_OTHER);
    }
}
