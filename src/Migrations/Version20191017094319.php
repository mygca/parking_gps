<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191017094319 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE parking ADD geo_point VARCHAR(255) NOT NULL, ADD geo_shape VARCHAR(255) NOT NULL, ADD id_ref_zdl INT NOT NULL, ADD nom_zdl VARCHAR(255) NOT NULL, DROP geo_point, DROP geo_shape');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE parking ADD geo_point VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, ADD geo_shape VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, DROP geo_point, DROP geo_shape, DROP id_ref_zdl, DROP nom_zdl');
    }
}
