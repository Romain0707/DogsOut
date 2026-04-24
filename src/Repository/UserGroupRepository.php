<?php

namespace App\Repository;

use App\Entity\UserGroup;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class UserGroupRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserGroup::class);
    }

    public function findPublic(): array
    {
        return $this->createQueryBuilder('g')
            ->where('g.isPublic = true')
            ->orderBy('g.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findByMember(User $user): array
    {
        return $this->createQueryBuilder('g')
            ->innerJoin('g.groupMembers', 'gm')
            ->where('gm.user = :user')
            ->andWhere('gm.status = :status')
            ->setParameter('user', $user)
            ->setParameter('status', 'active')
            ->orderBy('g.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function search(string $query): array
    {
        return $this->createQueryBuilder('g')
            ->where('g.name LIKE :query')
            ->orWhere('g.description LIKE :query')
            ->setParameter('query', '%' . $query . '%')
            ->orderBy('g.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }
}