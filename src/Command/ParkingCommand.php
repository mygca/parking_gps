<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 17/10/2019
 * Time: 09:15
 */

namespace App\Command;

use App\Entity\GaresIDF;
use App\Entity\Parking;
use Doctrine\ORM\EntityManagerInterface;
use League\Csv\Reader;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;


class ParkingCommand extends Command
{
    /**
     * ParkingCommand constructor.
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

        $reader = Reader::createFromPath('%kernel.root_dir%/../public/uploads/csv/Parkingslist.csv', 'r');
        $reader->setDelimiter(',');

        $parkList =  $reader->fetchAssoc();

        $io->progressStart(iterator_count($parkList));

        foreach ($parkList as $row)
        {

            $data = $this->em->getRepository(GaresIDF::class)->find(intval($row['gares_id']));


            if(isset($data)) {

                $parking = (new Parking())
                    ->setGeoPoint($row['geo'])
                    ->setCode($row['recordid'])
                    ->setParkName($row['nom_parking'])
                    ->setNbrPlace($row['nombre_de_places'])
                    ->setAddress($row['adresse'])
                    ->setZipcode($row['code_postal'])
                    ->setCity($row['ville'])
                    ->setHandicape($row['handicape'])
                    ->setCamera($row['camera'])
                    ->setMaxHeight($row['hauteur_maximum'])
                    ->setCompany($row["company"])
                    ->setPriceDay($row['prix_jour'])
                    ->setPriceWeek($row['prix_semaine'])
                    ->setFullTime($row['24/24'])
                    ->setOpenTime($row['time_opening'])
                    ->setCloseTime($row['time_closing'])
                    ->addGaresID($data);
                ;



                if (strpos($row['gares_id'], '.') !== false) {
                    $val = explode('.', $row['gares_id']);
                    foreach ($val as $gare) {
                        $new = $this->em->getRepository(GaresIDF::class)->find(intval($gare));
                        if(isset($new)) {
                            $parking->addGaresID($new);
                        }
                    }
                } else {
                    $parking->addGaresID($data);
                }

                $this->em->persist($parking);
                $io->progressAdvance();
            }


        }

        $this->em->flush();

        $io->progressFinish();
        $io->success('CSV is included !');
    }

}