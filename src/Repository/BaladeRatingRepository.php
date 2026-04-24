<?php

namespace App\Repository;

use App\Entity\Balade;
use App\Entity\BaladeRating;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class BaladeRatingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BaladeRating::class);
    }

    public function findUserRating(Balade $balade, User $user): ?BaladeRating
    {
        return $this->findOneBy([
            'balade' => $balade,
            'user'   => $user,
        ]);
    }

    public function getAverage(Balade $balade): float
    {
        $result = $this->createQueryBuilder('r')
            ->select('AVG(r.rating) as avg')
            ->where('r.balade = :balade')
            ->setParameter('balade', $balade)
            ->getQuery()
            ->getSingleResult();

        $avg = (float) ($result['avg'] ?? 0);
        return floor($avg * 10) / 10;
    }

    public function getCount(Balade $balade): int
    {
        return $this->count(['balade' => $balade]);
    }
}