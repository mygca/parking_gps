<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 12/02/2020
 * Time: 18:54
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


class ResetDatabaseCommand extends Command
{
    /**
     * ResetDatabaseCommand constructor.
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
        $this->setName('reset:db')
            ->setDescription('Reset and clear database');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        shell_exec("bash public/shell/reset_db.sh");
    }
}