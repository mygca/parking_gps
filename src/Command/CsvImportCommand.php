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


class CsvImportCommand extends Command
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
        $this->setName('csv:import')
            ->setDescription('Import a CSV file into BDD');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);

        $io->title('Attempting to import the file');

        $reader = Reader::createFromPath('%kernel.root_dir%/../public/csv/parcs-relais-idf.csv', 'r');
        $reader->setDelimiter(';');

        $results = $reader->fetchAssoc();

        $io->progressStart(iterator_count($results));

        foreach ($results as $row)
        {
            $parking = (new Parking())
                ->setGeoPoint($row['Geo Point'])
                ->setGeoShape($row['Geo Shape'])
                ->setIdPr($row['ID_PR'])
                ->setNomPr($row['NOM_PR'])
                ->setNbPlPr($row['NB_PL_PR'])
                ->setNbPlCov($row['NB_PL_COV'])
                ->setNbPlPmr($row['NB_PL_PMR'])
                ->setNbPlElec($row['NB_PL_ELEC'])
                ->setNbPl2rm($row['NB_PL_2RM'])
                ->setNbPlV($row['NB_PL_V'])
                ->setLabelPr($row['LABEL_PR'])
                ->setMoaPr($row['MOA_PR'])
                ->setGestioPr($row['GESTION_PR'])
                ->setStructPr($row['STRUCT_PR'])
                ->setWww($row['WWW'])
                ->setMesDates($row['MES_DATE'])
                ->setMesAnnees($row['MES_ANNEE'])
                ->setInseeT($row['INSEE_T'])
                ->setNomComm($row['NOM_COMM'])
                ->setAdresPr($row['ADRES_PR'])
                ->setIdRefZdl($row['ID_REF_ZDL'])
                ->setNomZdl($row['NOM_ZDL'])
                ->setIdRefLda($row['ID_REF_LDA'])
                ->setNomLda($row['NOM_LDA'])
                ->setNomGare($row['NOM_GARE'])
                ;

            $this->em->persist($parking);

            $io->progressAdvance();
        }

        $this->em->flush();

        $io->progressFinish();
        $io->success('Work !');
    }

}