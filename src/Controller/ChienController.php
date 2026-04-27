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
    #[Route('/{id}/edit', name: 'app_chien_edit', methods: ['GET', 'POST'])]
    public function form(Request $request, EntityManagerInterface $entityManager, Security $security, ?Chien $chien = null): Response
    {
        $isNew = $chien === null;

        if ($isNew) {
            $chien = new Chien();
        }

        $form = $this->createForm(ChienType::class, $chien);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if ($isNew) {
                $chien->setUser($this->getUser());

                $user = $security->getUser();
                $user->setFirstConnexion(false);
                $entityManager->persist($user);
                $entityManager->persist($chien);
            }

            $entityManager->flush();

            return $this->redirectToRoute('home', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('chien/createupdate.html.twig', [
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
