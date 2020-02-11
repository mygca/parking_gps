<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200210151701 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE parking_list (id INT AUTO_INCREMENT NOT NULL, geo_point VARCHAR(255) NOT NULL, record_id INT NOT NULL, park_name VARCHAR(255) NOT NULL, company VARCHAR(255) DEFAULT NULL, address VARCHAR(255) DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, zipcode INT DEFAULT NULL, gare_id INT DEFAULT NULL, full_time TINYINT(1) DEFAULT NULL, time_open VARCHAR(255) DEFAULT NULL, time_close VARCHAR(255) DEFAULT NULL, price_day VARCHAR(255) DEFAULT NULL, price_week VARCHAR(255) DEFAULT NULL, camera TINYINT(1) DEFAULT NULL, handicape TINYINT(1) DEFAULT NULL, max_height VARCHAR(255) DEFAULT NULL, number_places VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE contact CHANGE file file VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE csv_file CHANGE into_db into_db TINYINT(1) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE parking_list');
        $this->addSql('ALTER TABLE contact CHANGE file file VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE csv_file CHANGE into_db into_db TINYINT(1) DEFAULT \'0\' NOT NULL');
    }
}
