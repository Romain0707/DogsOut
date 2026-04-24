<?php

namespace App\Repository;

use App\Entity\GroupMember;
use App\Entity\UserGroup;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class GroupMemberRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GroupMember::class);
    }

    public function findMembership(UserGroup $group, User $user): ?GroupMember
    {
        return $this->createQueryBuilder('gm')
            ->where('gm.usergroup = :group')
            ->andWhere('gm.user = :user')
            ->setParameter('group', $group)
            ->setParameter('user', $user)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findActiveMembers(UserGroup $group): array
    {
        return $this->createQueryBuilder('gm')
            ->where('gm.usergroup = :group')
            ->andWhere('gm.status = :status')
            ->setParameter('group', $group)
            ->setParameter('status', 'active')
            ->leftJoin('gm.user', 'u')
            ->addSelect('u')
            ->orderBy('gm.role', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findPendingRequests(UserGroup $group): array
    {
        return $this->createQueryBuilder('gm')
            ->where('gm.usergroup = :group')
            ->andWhere('gm.status = :status')
            ->setParameter('group', $group)
            ->setParameter('status', 'pending')
            ->leftJoin('gm.user', 'u')
            ->addSelect('u')
            ->orderBy('gm.joinedAt', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function isAdminOrModerator(UserGroup $group, User $user): bool
    {
        $result = $this->createQueryBuilder('gm')
            ->where('gm.usergroup = :group')
            ->andWhere('gm.user = :user')
            ->andWhere('gm.status = :status')
            ->andWhere('gm.role IN (:roles)')
            ->setParameter('group', $group)
            ->setParameter('user', $user)
            ->setParameter('status', 'active')
            ->setParameter('roles', ['admin', 'moderator'])
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        return $result !== null;
    }
}