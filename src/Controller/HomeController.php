<?php

namespace App\Controller;

use App\Repository\BaladeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class HomeController extends AbstractController
{
    #[Route(path: '/', name: 'home')]
    public function index(BaladeRepository $baladeRepo): Response
    {
        return $this->render('home/index.html.twig', [
            'balades' => $baladeRepo->findBy([], ['id' => 'DESC'], 4),
        ]);
    }
}
