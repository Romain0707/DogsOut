<?php

namespace App\Repository;

use App\Entity\GroupEvent;
use App\Entity\UserGroup;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class GroupEventRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GroupEvent::class);
    }

    /**
     * Événements à venir d'un groupe
     */
    public function findUpcoming(UserGroup $group): array
    {
        return $this->createQueryBuilder('ge')
            ->where('ge.usergroup = :group')
            ->andWhere('ge.eventDate >= :now')
            ->setParameter('group', $group)
            ->setParameter('now', new \DateTimeImmutable())
            ->orderBy('ge.eventDate', 'ASC')
            ->leftJoin('ge.balade', 'b')
            ->addSelect('b')
            ->getQuery()
            ->getResult();
    }

    /**
     * Événements passés d'un groupe
     */
    public function findPast(UserGroup $group): array
    {
        return $this->createQueryBuilder('ge')
            ->where('ge.usergroup = :group')
            ->andWhere('ge.eventDate < :now')
            ->setParameter('group', $group)
            ->setParameter('now', new \DateTimeImmutable())
            ->orderBy('ge.eventDate', 'DESC')
            ->leftJoin('ge.balade', 'b')
            ->addSelect('b')
            ->getQuery()
            ->getResult();
    }

    /**
     * Événements à venir pour tous les groupes d'un user
     */
    public function findUpcomingForUser(User $user): array
    {
        return $this->createQueryBuilder('ge')
            ->innerJoin('ge.usergroup', 'g')
            ->innerJoin('g.groupMembers', 'gm')
            ->where('gm.user = :user')
            ->andWhere('gm.status = :status')
            ->andWhere('ge.eventDate >= :now')
            ->setParameter('user', $user)
            ->setParameter('status', 'active')
            ->setParameter('now', new \DateTimeImmutable())
            ->orderBy('ge.eventDate', 'ASC')
            ->leftJoin('ge.balade', 'b')
            ->addSelect('b')
            ->getQuery()
            ->getResult();
    }
}