<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200212152442 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE parking_gares_idf (parking_id INT NOT NULL, gares_idf_id INT NOT NULL, INDEX IDX_E66FC1D6F17B2DD (parking_id), INDEX IDX_E66FC1D6614BAF91 (gares_idf_id), PRIMARY KEY(parking_id, gares_idf_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE favorite_users (favorite_id INT NOT NULL, users_id INT NOT NULL, INDEX IDX_A20B8ECDAA17481D (favorite_id), INDEX IDX_A20B8ECD67B3B43D (users_id), PRIMARY KEY(favorite_id, users_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE favorite_parking (favorite_id INT NOT NULL, parking_id INT NOT NULL, INDEX IDX_EF63FC14AA17481D (favorite_id), INDEX IDX_EF63FC14F17B2DD (parking_id), PRIMARY KEY(favorite_id, parking_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE parking_gares_idf ADD CONSTRAINT FK_E66FC1D6F17B2DD FOREIGN KEY (parking_id) REFERENCES parking (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE parking_gares_idf ADD CONSTRAINT FK_E66FC1D6614BAF91 FOREIGN KEY (gares_idf_id) REFERENCES gares_idf (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE favorite_users ADD CONSTRAINT FK_A20B8ECDAA17481D FOREIGN KEY (favorite_id) REFERENCES favorite (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE favorite_users ADD CONSTRAINT FK_A20B8ECD67B3B43D FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE favorite_parking ADD CONSTRAINT FK_EF63FC14AA17481D FOREIGN KEY (favorite_id) REFERENCES favorite (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE favorite_parking ADD CONSTRAINT FK_EF63FC14F17B2DD FOREIGN KEY (parking_id) REFERENCES parking (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE parking_gares_idf');
        $this->addSql('DROP TABLE favorite_users');
        $this->addSql('DROP TABLE favorite_parking');
    }
}
