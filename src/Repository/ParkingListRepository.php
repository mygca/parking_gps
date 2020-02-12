<?php

namespace App\Repository;

use App\Entity\ParkingList;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ParkingList|null find($id, $lockMode = null, $lockVersion = null)
 * @method ParkingList|null findOneBy(array $criteria, array $orderBy = null)
 * @method ParkingList[]    findAll()
 * @method ParkingList[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ParkingListRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ParkingList::class);
    }

    // /**
    //  * @return ParkingList[] Returns an array of ParkingList objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ParkingList
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
