<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200214142154 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE gares_idf_parking (gares_idf_id INT NOT NULL, parking_id INT NOT NULL, INDEX IDX_9D750157614BAF91 (gares_idf_id), INDEX IDX_9D750157F17B2DD (parking_id), PRIMARY KEY(gares_idf_id, parking_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('SET FOREIGN_KEY_CHECKS = 0');
        $this->addSql('ALTER TABLE gares_idf_parking ADD CONSTRAINT FK_9D750157614BAF91 FOREIGN KEY (gares_idf_id) REFERENCES gares_idf (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE gares_idf_parking ADD CONSTRAINT FK_9D750157F17B2DD FOREIGN KEY (parking_id) REFERENCES parking (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE gares_idf CHANGE id id INT NOT NULL');
        $this->addSql('SET FOREIGN_KEY_CHECKS = 0');

    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE gares_idf_parking');
        $this->addSql('ALTER TABLE gares_idf CHANGE id id INT AUTO_INCREMENT NOT NULL');
    }
}
