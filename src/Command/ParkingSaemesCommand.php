<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 17/10/2019
 * Time: 09:15
 */

namespace App\Command;

use App\Entity\Parking;
use App\Entity\Saemes;
use Doctrine\ORM\EntityManagerInterface;
use League\Csv\Reader;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;


class ParkingSaemesCommand extends Command
{
    /**
     * CsvImportCommand constructor.
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
        $this->setName('park:saemes')
            ->setDescription('Import a CSV file into BDD');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);

        $io->title('Attempting to import the file');

        $reader = Reader::createFromPath('%kernel.root_dir%/../public/uploads/csv/parking_saemes.csv', 'r');
        $reader->setDelimiter(';');

        $results = $reader->fetchAssoc();

        $io->progressStart(iterator_count($results));

        foreach ($results as $row)
        {
            $parking = (new Saemes())
                ->setGeo($row['geo'])
                ->setCodeParc($row['Code parking'])
                ->setTypeParc($row['Type de parc'])
                ->setNomParking($row['Nom parking'])
                ->setAddress($row['Adresse principale d\'accès véhicules'])
                ->setZipcode($row['Code postal'])
                ->setCity($row['Ville'])
                ->setTel($row['Téléphone'])
                ->setNbPlace($row['Nombre de places'])
                ->setHauteurMax($row['Hauteur maximum'])
            ;

            $this->em->persist($parking);

            $io->progressAdvance();
        }

        $this->em->flush();

        $io->progressFinish();
        $io->success('Work !');
    }

}