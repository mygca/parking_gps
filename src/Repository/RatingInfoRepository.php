<?php

namespace App\Repository;

use App\Entity\RatingInfo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method RatingInfo|null find($id, $lockMode = null, $lockVersion = null)
 * @method RatingInfo|null findOneBy(array $criteria, array $orderBy = null)
 * @method RatingInfo[]    findAll()
 * @method RatingInfo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RatingInfoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RatingInfo::class);
    }

    // /**
    //  * @return RatingInfo[] Returns an array of RatingInfo objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?RatingInfo
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
