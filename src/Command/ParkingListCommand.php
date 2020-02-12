<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 10/02/2020
 * Time: 15:35
 */

namespace App\Command;

use App\Entity\ParkingList;
use Doctrine\ORM\EntityManagerInterface;
use League\Csv\Reader;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;


class ParkingListCommand extends Command
{
    /**
     * CsvGareCommand constructor.
     * @var EntityManagerInterface $em
     */
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        parent::__construct();
        $this->em = $em;
    }


    protected function configure()
    {
        $this->setName('csv:parklist')
            ->setDescription('Import a CSV file into BDD');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);

        $io->title('Attempting to import the file');

        $reader = Reader::createFromPath('%kernel.root_dir%/../public/uploads/csv/ParkingsList.csv', 'r');
        $reader->setDelimiter(',');

        $results = $reader->fetchAssoc();

        $io->progressStart(iterator_count($results));

        foreach ($results as $row)
        {
            $parks = (new ParkingList())
                ->setGeoPoint($row['geo'])
                ->setRecordId($row['recordid'])
                ->setParkName($row['nom_parking'])
                ->setCompany($row['company'])
                ->setAddress($row['adresse'])
                ->setCity($row['ville'])
                ->setZipcode(intval($row['code_postal']))
                ->setGareId(intval($row['gares_id']))
                ->setTimeOpen($row['time_opening'])
                ->setTimeClose($row['time_closing'])
                ->setPriceDay($row['prix_jour'])
                ->setPriceWeek($row['prix_semaine'])
                ->setMaxHeight($row['hauteur_maximum'])
                ->setNumberPlaces($row['nombre_de_places'])
                ->setFullTime($row['24/24'])
                ->setCamera($row['camera'])
                ->setHandicape($row['handicape'])
            ;

            $this->em->persist($parks);

            $io->progressAdvance();
        }

        $this->em->flush();

        $io->progressFinish();
        $io->success('Work !');
    }

}