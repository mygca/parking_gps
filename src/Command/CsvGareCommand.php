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


class CsvGareCommand extends Command
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
        $this->setName('csv:gareidf')
            ->setDescription('Import a CSV file into BDD');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);

        $io->title('Attempting to import the file');

        $reader = Reader::createFromPath('%kernel.root_dir%/../public/uploads/csv/gares_idf.csv', 'r');
        $reader->setDelimiter(';');

        $results = $reader->fetchAssoc();

        $io->progressStart(iterator_count($results));

        foreach ($results as $row)
        {

            if( $row['res_com'] == 'LIGNE J' OR
                $row['res_com'] == 'LIGNE N' OR
                $row['res_com'] == 'LIGNE P' OR
                $row['res_com'] == 'RER A' OR
                $row['res_com'] == 'RER B' OR
                $row['res_com'] == 'RER C' OR
                $row['res_com'] == 'RER D'
            ) {

            $gare = (new GaresIDF())
                ->setId(intval($row['gares_id']))
                ->setGeoPoint($row['Geo Point'])
                ->setGeoShape($row['Geo Shape'])
                ->setNomGare($row['nom_gare'])
                ->setNomLong($row['nomlong'])
                ->setNomIv($row['nom_iv'])
                ->setLigne($row['ligne'])
                ->setLigneCode($row['ligne_code'])
                ->setExploitant($row['exploitant'])
                ->setGaresID($row['gares_id'])
                ->setIndiceLigne($row['indice_lig'])
                ->setReseau($row['reseau'])
                ->setX($row['x'])
                ->setY($row['y'])
            ;
            $this->em->persist($gare);
            }
            $io->progressAdvance();
        }

        $this->em->flush();

        $io->progressFinish();
        $io->success('Work !');
    }

}