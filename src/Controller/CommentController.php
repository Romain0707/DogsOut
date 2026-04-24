<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Entity\Balade;
use App\Form\CommentType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/comment')]
final class CommentController extends AbstractController
{
    #[Route('/add/{id}', name: 'app_comment_add', methods: ['POST'])]
    public function add(Balade $balade, Request $request, EntityManagerInterface $em, Security $security): Response 
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $comment->setUser($security->getUser());
            $comment->setBalade($balade);
            $comment->setCreatedAt(new \DateTimeImmutable());

            $em->persist($comment);
            $em->flush();

            $this->addFlash('success', 'Commentaire ajouté !');
        }

        return $this->redirectToRoute('app_balade_show', ['id' => $balade->getId()]);
    }

    #[Route('/delete/{id}', name: 'app_comment_delete', methods: ['POST'])]
    public function delete(Comment $comment, Request $request, EntityManagerInterface $em, Security $security): Response 
    {
        $user = $security->getUser();
        $baladeId = $comment->getBalade()->getId();

        if ($comment->getUser() !== $user) {
            throw $this->createAccessDeniedException();
        }

        if ($this->isCsrfTokenValid('delete_comment_' . $comment->getId(), $request->request->get('_token'))) {
            $em->remove($comment);
            $em->flush();
            $this->addFlash('success', 'Commentaire supprimé.');
        }

        return $this->redirectToRoute('app_balade_show', ['id' => $baladeId]);
    }
}