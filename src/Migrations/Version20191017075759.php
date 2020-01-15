<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191017075759 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE parking (id INT AUTO_INCREMENT NOT NULL, geo_point VARCHAR(255) NOT NULL, geo_shape VARCHAR(255) NOT NULL, id_pr INT NOT NULL, nom_pr VARCHAR(255) NOT NULL, nb_pl_pr INT NOT NULL, nb_pl_cov INT NOT NULL, nb_pl_pmr INT NOT NULL, nb_pl_elec INT NOT NULL, nb_pl_2rm INT NOT NULL, nb_pl_v INT NOT NULL, label_pr INT NOT NULL, moa_pr VARCHAR(255) DEFAULT NULL, gestio_pr VARCHAR(255) DEFAULT NULL, struct_pr VARCHAR(255) DEFAULT NULL, www VARCHAR(255) DEFAULT NULL, mes_dates VARCHAR(255) DEFAULT NULL, mes_annees INT NOT NULL, insee_t INT NOT NULL, nom_comm VARCHAR(255) NOT NULL, adres_pr VARCHAR(255) DEFAULT NULL, id_ref_lda INT NOT NULL, nom_lda VARCHAR(255) NOT NULL, nom_gare VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE parking');
    }
}
