<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 17/10/2019
 * Time: 09:15
 */

namespace App\Command;

use App\Entity\Parking;
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
        $this->setName('csv:parking')
            ->setDescription('Import a CSV file into BDD');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);

        $io->title('Attempting to import the file');

        $reader = Reader::createFromPath('%kernel.root_dir%/../public/uploads/csv/parking_saemes.csv', 'r');
        $reader->setDelimiter(';');

        $saemes = $reader->fetchAssoc();

        $io->progressStart(iterator_count($saemes));

        foreach ($saemes as $row)
        {
            $parking = (new Parking())
                ->setGeoPoint($row['geo'])
                ->setCode('S-' . $row['Code parking'])
                ->setParkName($row['Nom parking'])
                ->setNbrPlace($row['Nombre de places'])
                ->setAddress($row['Adresse principale d\'accès véhicules'])
                ->setZipcode($row['Code postal'])
                ->setCity($row['Ville'])
                ->setHandicape($row['Accessibilité PMR'])
                ->setCamera($row['Vidéo surveillance'])
                ->setMaxHeight($row['Hauteur maximum'])
                ->setCompany("Saemes")
                ->setMotoAccess($row['Accès motos'])
                ->setPriceDay($row['horaire : VL : 24h00 : 24 hr'])
                ->setPriceWeek($row['forfait : VL : Forfait 1 semaine : 1 week rate'])
                ->setOpenTime('Pas d\'information')
                ->setCloseTime('Pas d\'information')
                ->setPlaceElec('Pas d\'information')
                ->setPlaceMoto('Pas d\'information')
                ->setPlacePMR('Pas d\'information')
            ;

            if ($row['Horaires d\'accès au public (pour les usagers non abonnés)'] == '24h/24, 7j/7')
                $parking->setFullTime(true);
            else
                $parking->setFullTime(false);

            $this->em->persist($parking);

            $io->progressAdvance();
        }

        $this->em->flush();

        $io->progressFinish();
        $io->success('CSV Saemes included !');


        $reader = Reader::createFromPath('%kernel.root_dir%/../public/uploads/csv/Parkingslist.csv', 'r');
        $reader->setDelimiter(',');

        $parkList =  $reader->fetchAssoc();

        $io->progressStart(iterator_count($parkList));

        foreach ($parkList as $row)
        {
            $parking = (new Parking())
                ->setGeoPoint($row['geo'])
                ->setCode('PL-' . $row['recordid'])
                ->setParkName($row['nom_parking'])
                ->setNbrPlace($row['nombre_de_places'])
                ->setAddress($row['adresse'])
                ->setZipcode($row['code_postal'])
                ->setCity($row['ville'])
                ->setHandicape($row['handicape'])
                ->setCamera($row['camera'])
                ->setMaxHeight($row['hauteur_maximum'])
                ->setCompany($row["company"])
                ->setMotoAccess('Pas d\'information')
                ->setPriceDay($row['prix_jour'])
                ->setPriceWeek($row['prix_semaine'])
                ->setFullTime($row['24/24'])
                ->setOpenTime($row['time_opening'])
                ->setCloseTime($row['time_closing'])
                ->setPlacePMR('Pas d\'information')
                ->setPlaceElec('Pas d\'information')
                ->setPlaceMoto('Pas d\'information')
            ;

            $this->em->persist($parking);

            $io->progressAdvance();
        }

        $this->em->flush();

        $io->progressFinish();
        $io->success('CSV Parking_List included !');

        $reader = Reader::createFromPath('%kernel.root_dir%/../public/uploads/csv/parking_relais.csv', 'r');
        $reader->setDelimiter(';');

        $parkRelais =  $reader->fetchAssoc();

        $io->progressStart(iterator_count($parkRelais));

        foreach ($parkRelais as $row)
        {
            $parking = (new Parking())
                ->setGeoPoint($row['Geo Point'])
                ->setCode('PL-' . $row['ID_PR'])
                ->setParkName($row['NOM_PR'])
                ->setNbrPlace($row['NB_PL_PR'])
                ->setAddress($row['ADRES_PR'])
                ->setZipcode($row['INSEE_T'])
                ->setCity($row['NOM_COMM'])
                ->setCamera('Pas d\'information')
                ->setMaxHeight('Pas d\'information')
                ->setCompany($row["GESTION_PR"])
                ->setPriceDay('Pas d\'information')
                ->setPriceWeek('Pas d\'information')
                ->setFullTime('Pas d\'information')
                ->setOpenTime('Pas d\'information')
                ->setCloseTime('Pas d\'information')
                ->setPlacePMR($row['NB_PL_PMR'])
                ->setPlaceElec($row['NB_PL_ELEC'])
                ->setPlaceMoto($row['NB_PL_2RM'])
            ;

            if (intval($row['NB_PL_PMR']) > 0)
                $parking->setHandicape(true);
            else
                $parking->setHandicape(false);

            if (intval($row['NB_PL_2RM']) > 0)
                $parking->setMotoAccess(true);
            else
                $parking->setMotoAccess(false);


            $this->em->persist($parking);

            $io->progressAdvance();
        }

        $this->em->flush();

        $io->progressFinish();
        $io->success('CSV Parking Relais included !');

    }

}