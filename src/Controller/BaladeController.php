<?php

namespace App\Controller;

use App\Entity\Balade;
use App\Form\BaladeType;
use App\Repository\BaladeRepository;
use App\Service\BaladeSnapshotter;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/balade')]
final class BaladeController extends AbstractController
{
    #[Route(name: 'app_balade_index', methods: ['GET'])]
    public function index(BaladeRepository $baladeRepository): Response
    {
        return $this->render('balade/index.html.twig', [
            'balades' => $baladeRepository->findAll(),
        ]);
    }

    #[Route('/admin/new', name: 'admin_balade_new')]
    #[Route('/form/{id}', name: 'app_balade_form', methods: ['GET', 'POST'], defaults: ['id' => null])]
    public function form(Request $request, EntityManagerInterface $entityManager, BaladeSnapshotter $snapshotter, ?Balade $balade = null ): Response 
    {
        if (!$balade) {
            $balade = new Balade();
        } else {
            if ($balade->getUser() !== $this->getUser()) {
                throw $this->createAccessDeniedException();
            }
        }

        $form = $this->createForm(BaladeType::class, $balade);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$balade->getId()) {
                $balade->setUser($this->getUser());
                $balade->setCreatedAt(new \DateTimeImmutable());
                $entityManager->persist($balade);
            }

            $entityManager->flush();
            $snapshotter->generate($balade, $this->getParameter('kernel.project_dir'));

            return $this->redirectToRoute('app_balade_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('balade/_form.html.twig', [
            'balade' => $balade,
            'form'   => $form,
        ]);
    }

    #[Route('/article/{id}', name: 'app_balade_show', methods: ['GET'])]
    public function show(Balade $balade): Response
    {
        return $this->render('balade/show.html.twig', [
            'balade' => $balade,
        ]);
    }

    #[Route('/delete/{id}', name: 'app_balade_delete', methods: ['POST'])]
    public function delete(Request $request, Balade $balade, EntityManagerInterface $entityManager): Response
    {
        if ($balade->getUser() !== $this->getUser()) {
            throw $this->createAccessDeniedException();
        }
        if ($this->isCsrfTokenValid('delete'.$balade->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($balade);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_balade_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/snapshot/{id}', name: 'app_balade_snapshot', methods: ['GET'])]
    public function snapshot(Balade $balade): Response
    {
        return $this->render('balade/snapshot.html.twig', [
            'balade' => $balade,
        ]);
    }
}
