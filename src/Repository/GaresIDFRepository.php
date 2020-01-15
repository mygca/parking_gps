<?php

namespace App\Repository;

use App\Entity\GaresIDF;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GaresIDF|null find($id, $lockMode = null, $lockVersion = null)
 * @method GaresIDF|null findOneBy(array $criteria, array $orderBy = null)
 * @method GaresIDF[]    findAll()
 * @method GaresIDF[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GaresIDFRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GaresIDF::class);
    }

    // /**
    //  * @return GaresIDF[] Returns an array of GaresIDF objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GaresIDF
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
