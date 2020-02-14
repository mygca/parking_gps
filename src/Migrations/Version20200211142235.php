<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200211142235 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE parking (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) DEFAULT NULL, geo_point VARCHAR(255) NOT NULL, park_name VARCHAR(255) NOT NULL, nbr_place VARCHAR(255) DEFAULT NULL, address VARCHAR(255) NOT NULL, zipcode VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, handicape TINYINT(1) NOT NULL, camera TINYINT(1) DEFAULT NULL, company VARCHAR(255) DEFAULT NULL, max_height VARCHAR(255) DEFAULT NULL, full_time TINYINT(1) DEFAULT NULL, moto_access TINYINT(1) DEFAULT NULL, price_day VARCHAR(255) DEFAULT NULL, price_week VARCHAR(255) DEFAULT NULL, open_time VARCHAR(255) DEFAULT NULL, close_time VARCHAR(255) DEFAULT NULL, place_pmr VARCHAR(255) DEFAULT NULL, place_elec VARCHAR(255) DEFAULT NULL, place_moto VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE parking');
    }
}
