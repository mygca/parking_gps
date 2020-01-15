<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 17/10/2019
 * Time: 16:06
 */

namespace App\Command;

use Doctrine\ORM\EntityManagerInterface;
use League\Csv\Reader;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;


class TesterCommand extends Command
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
        $this->setName('test:shell')
            ->setDescription('Test my script shell / php');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);

        $io->title('Attempting to test the script');

        $reader = Reader::createFromPath('%kernel.root_dir%/../public/uploads/csv/parking_seames.csv', 'r');
        $reader->setDelimiter(';');


        $value = "01";

        $csv_name = strtolower('');
        $a=['name', 'type', '255', 'yes'];
        $a[1] = gettype($value);
        $string = implode(' ', $a);

        $user_response = shell_exec("bash public/shell/csv_entity_database.sh $string");

        echo "$user_response\n";


    }

}