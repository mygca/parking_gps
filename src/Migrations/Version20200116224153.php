<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200116224153 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE saemes (id INT AUTO_INCREMENT NOT NULL, geo VARCHAR(255) NOT NULL, code_parc VARCHAR(255) NOT NULL, type_parc VARCHAR(255) NOT NULL, nom_parking VARCHAR(255) NOT NULL, address VARCHAR(255) NOT NULL, zipcode VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, tel VARCHAR(255) NOT NULL, nb_place VARCHAR(255) NOT NULL, hauteur_max VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE gares_idf (id INT AUTO_INCREMENT NOT NULL, geopoint VARCHAR(255) NOT NULL, geoshape VARCHAR(255) NOT NULL, nom_gare VARCHAR(255) NOT NULL, nom_long VARCHAR(255) NOT NULL, nom_iv VARCHAR(255) NOT NULL, ligne VARCHAR(255) NOT NULL, ligne_code VARCHAR(255) NOT NULL, exploitant VARCHAR(255) NOT NULL, gares_id INT NOT NULL, indice_ligne VARCHAR(255) NOT NULL, reseau VARCHAR(255) NOT NULL, x VARCHAR(255) NOT NULL, y VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE contact CHANGE file file VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE csv_file CHANGE into_db into_db TINYINT(1) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE saemes');
        $this->addSql('DROP TABLE gares_idf');
        $this->addSql('ALTER TABLE contact CHANGE file file VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE csv_file CHANGE into_db into_db TINYINT(1) DEFAULT \'0\' NOT NULL');
    }
}
