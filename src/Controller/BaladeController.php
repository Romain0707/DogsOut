<?php

namespace App\Controller;

use App\Entity\Balade;
use App\Entity\BaladeRating;
use App\Entity\BaladeTag;
use App\Entity\Comment;
use App\Form\BaladeType;
use App\Form\CommentType;
use App\Repository\BaladeRatingRepository;
use App\Repository\BaladeRepository;
use App\Repository\BaladeTagRepository;
use App\Service\SluggerService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/balade')]
final class BaladeController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private SluggerService $slugger,
        private BaladeTagRepository $baladeTagRepository,
    ) {}

    #[Route(name: 'app_balade_index', methods: ['GET'])]
    public function index(BaladeRepository $baladeRepository): Response
    {
        return $this->render('balade/index.html.twig', [
            'balades' => $baladeRepository->findAll(),
        ]);
    }

    #[Route('/admin/new', name: 'admin_balade_new')]
    #[Route('/form/{id}', name: 'app_balade_form', methods: ['GET', 'POST'], defaults: ['id' => null])]
    public function form(Request $request, ?Balade $balade = null): Response
    {
        $isNew = !$balade;

        if (!$balade) {
            $balade = new Balade();
        } else {
            if ($balade->getUser() !== $this->getUser()) {
                throw $this->createAccessDeniedException();
            }
        }

        $customTagsBackup = $isNew ? [] : $balade->getBaladeTags()
            ->filter(fn($t) => !$t->IsPreset())
            ->toArray();

        $form = $this->createForm(BaladeType::class, $balade);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            if ($isNew) {
                $balade->setUser($this->getUser());
                $balade->setCreatedAt(new \DateTimeImmutable());
                $this->em->persist($balade);
                $this->em->flush(); 

                $pendingTags = $request->getSession()->get('pending_balade_tags', []);
                foreach ($pendingTags as $tagName) {
                    $slug = $this->slugger->slugify($tagName);
                    $tag  = $this->baladeTagRepository->findOneBy(['slug' => $slug]);
                    if (!$tag) {
                        $tag = new BaladeTag();
                        $tag->setName(ucfirst($tagName));
                        $tag->setSlug($slug);
                        $tag->setIsPreset(false);
                        $this->em->persist($tag);
                    }
                    if (!$balade->getBaladeTags()->contains($tag)) {
                        $balade->addBaladeTag($tag);
                    }
                }
                $request->getSession()->remove('pending_balade_tags');

            } else {
                foreach ($customTagsBackup as $customTag) {
                    if (!$balade->getBaladeTags()->contains($customTag)) {
                        $balade->addBaladeTag($customTag);
                    }
                }
            }

            $customTagName = trim($form->get('customTag')->getData() ?? '');
            if ($customTagName !== '') {
                $slug = $this->slugger->slugify($customTagName);
                $tag  = $this->baladeTagRepository->findOneBy(['slug' => $slug]);
                if (!$tag) {
                    $tag = new BaladeTag();
                    $tag->setName(ucfirst($customTagName));
                    $tag->setSlug($slug);
                    $tag->setIsPreset(false);
                    $this->em->persist($tag);
                }
                if (!$balade->getBaladeTags()->contains($tag)) {
                    $balade->addBaladeTag($tag);
                }
            }

            $this->em->flush();

            return $this->redirectToRoute('app_balade_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('balade/_form.html.twig', [
            'balade' => $balade,
            'form'   => $form,
            'isNew'  => $isNew,
        ]);
    }

    #[Route('/tag/pending/add', name: 'app_balade_tag_pending_add', methods: ['POST'])]
    public function addPendingTag(Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $data = json_decode($request->getContent(), true);
        $name = trim($data['name'] ?? '');

        if ($name === '') {
            return $this->json(['error' => 'Nom vide'], 400);
        }

        $session     = $request->getSession();
        $pendingTags = $session->get('pending_balade_tags', []);

        if (!in_array($name, $pendingTags)) {
            $pendingTags[] = $name;
            $session->set('pending_balade_tags', $pendingTags);
        }

        return $this->json(['name' => ucfirst($name)]);
    }

    #[Route('/tag/pending/remove', name: 'app_balade_tag_pending_remove', methods: ['POST'])]
    public function removePendingTag(Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        $data        = json_decode($request->getContent(), true);
        $name        = trim($data['name'] ?? '');
        $session     = $request->getSession();
        $pendingTags = $session->get('pending_balade_tags', []);
        $pendingTags = array_values(array_filter($pendingTags, fn($t) => $t !== $name));
        $session->set('pending_balade_tags', $pendingTags);

        return $this->json(['ok' => true]);
    }

    // ── Tags AJAX (balade existante) ──────────────────────────────────────

    #[Route('/{id}/tag/add', name: 'app_balade_tag_add', methods: ['POST'])]
    public function addTag(Balade $balade, Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        if ($balade->getUser() !== $this->getUser()) {
            return $this->json(['error' => 'Accès refusé'], 403);
        }

        $data = json_decode($request->getContent(), true);
        $name = trim($data['name'] ?? '');

        if ($name === '') {
            return $this->json(['error' => 'Nom vide'], 400);
        }

        $slug = $this->slugger->slugify($name);
        $tag  = $this->baladeTagRepository->findOneBy(['slug' => $slug]);

        if (!$tag) {
            $tag = new BaladeTag();
            $tag->setName(ucfirst($name));
            $tag->setSlug($slug);
            $tag->setIsPreset(false);
            $this->em->persist($tag);
        }

        if (!$balade->getBaladeTags()->contains($tag)) {
            $balade->addBaladeTag($tag);
        }

        $this->em->flush();

        return $this->json([
            'id'   => $tag->getId(),
            'name' => $tag->getName(),
            'slug' => $tag->getSlug(),
        ]);
    }

    #[Route('/{id}/tag/{tagId}/remove', name: 'app_balade_tag_remove', methods: ['POST'])]
    public function removeTag(Balade $balade, int $tagId): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');

        if ($balade->getUser() !== $this->getUser()) {
            return $this->json(['error' => 'Accès refusé'], 403);
        }

        $tag = $this->baladeTagRepository->find($tagId);

        if ($tag && $balade->getBaladeTags()->contains($tag)) {
            $balade->removeBaladeTag($tag);
            $this->em->flush();
        }

        return $this->json(['ok' => true]);
    }

    // ── Show ──────────────────────────────────────────────────────────────

    #[Route('/article/{id}', name: 'app_balade_show', methods: ['GET'])]
    public function show(Balade $balade, BaladeRatingRepository $ratingRepository): Response
    {
        $currentUser = $this->getUser();
        $commentForm = $this->createForm(CommentType::class, new Comment());

        return $this->render('balade/show.html.twig', [
            'balade'        => $balade,
            'commentForm'   => $commentForm,
            'ratingAverage' => $ratingRepository->getAverage($balade),
            'ratingCount'   => $ratingRepository->getCount($balade),
            'userRating'    => $currentUser ? $ratingRepository->findUserRating($balade, $currentUser)?->getRating() : null,
        ]);
    }

    // ── Delete ────────────────────────────────────────────────────────────

    #[Route('/delete/{id}', name: 'app_balade_delete', methods: ['POST'])]
    public function delete(Request $request, Balade $balade): Response
    {
        if ($balade->getUser() !== $this->getUser()) {
            throw $this->createAccessDeniedException();
        }

        if ($this->isCsrfTokenValid('delete' . $balade->getId(), $request->getPayload()->getString('_token'))) {
            $this->em->remove($balade);
            $this->em->flush();
        }

        return $this->redirectToRoute('app_balade_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/{id}/rate', name: 'app_balade_rate', methods: ['POST'])]
    public function rate(
        Balade $balade,
        Request $request,
        BaladeRatingRepository $ratingRepository,
    ): Response {
        $this->denyAccessUnlessGranted('ROLE_USER');
    
        /** @var \App\Entity\User $currentUser */
        $currentUser = $this->getUser();
    
        $data   = json_decode($request->getContent(), true);
        $rating = (int) ($data['rating'] ?? 0);
    
        if ($rating < 1 || $rating > 5) {
            return $this->json(['error' => 'Note invalide (1-5)'], 400);
        }
    
        // Cherche une note existante pour cet user
        $existing = $ratingRepository->findUserRating($balade, $currentUser);
    
        if ($existing) {
            // Met à jour la note existante
            $existing->setRating($rating);
        } else {
            // Crée une nouvelle note
            $newRating = new BaladeRating();
            $newRating->setBalade($balade);
            $newRating->setUser($currentUser);
            $newRating->setRating($rating);
            $this->em->persist($newRating);
        }
    
        $this->em->flush();
    
        return $this->json([
            'average'   => $ratingRepository->getAverage($balade),
            'count'     => $ratingRepository->getCount($balade),
            'userRating' => $rating,
        ]);
    }
}