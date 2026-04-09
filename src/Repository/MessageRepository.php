<?php

namespace App\Repository;

use App\Entity\Conversation;
use App\Entity\Message;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class MessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Message::class);
    }

    /**
     * Messages d'une conversation avec l'auteur en eager loading
     */
    public function findByConversation(Conversation $conversation): array
    {
        return $this->createQueryBuilder('m')
            ->where('m.conversation = :conversation')
            ->setParameter('conversation', $conversation)
            ->leftJoin('m.author', 'a')
            ->addSelect('a')
            ->orderBy('m.createdAt', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findAfter(Conversation $conversation, int $afterId): array
    {
        return $this->createQueryBuilder('m')
            ->where('m.conversation = :conversation')
            ->andWhere('m.id > :afterId')
            ->setParameter('conversation', $conversation)
            ->setParameter('afterId', $afterId)
            ->leftJoin('m.author', 'a')
            ->addSelect('a')
            ->orderBy('m.createdAt', 'ASC')
            ->getQuery()
            ->getResult();
    }
}