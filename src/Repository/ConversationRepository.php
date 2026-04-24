<?php

namespace App\Repository;

use App\Entity\Conversation;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ConversationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Conversation::class);
    }

    public function findByUser(User $user): array
    {
        return $this->createQueryBuilder('c')
            ->innerJoin('c.participants', 'p')
            ->where('p.user = :user')
            ->setParameter('user', $user)
            ->leftJoin('c.messages', 'm')
            ->addOrderBy('m.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function findPrivateConversation(User $userA, User $userB): ?Conversation
    {
        return $this->createQueryBuilder('c')
            ->innerJoin('c.participants', 'p1')
            ->innerJoin('c.participants', 'p2')
            ->where('p1.user = :userA')
            ->andWhere('p2.user = :userB')
            ->andWhere('c.title IS NULL')
            ->setParameter('userA', $userA)
            ->setParameter('userB', $userB)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}