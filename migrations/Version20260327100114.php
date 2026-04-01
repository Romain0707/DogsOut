<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260327100114 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE balade ADD CONSTRAINT FK_540083D7A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE chien ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE chien ADD CONSTRAINT FK_13A4067E6E59D40D FOREIGN KEY (race_id) REFERENCES race (id)');
        $this->addSql('ALTER TABLE chien ADD CONSTRAINT FK_13A4067EA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_13A4067EA76ED395 ON chien (user_id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CFE292D59 FOREIGN KEY (balade_id) REFERENCES balade (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE balade DROP FOREIGN KEY FK_540083D7A76ED395');
        $this->addSql('ALTER TABLE chien DROP FOREIGN KEY FK_13A4067E6E59D40D');
        $this->addSql('ALTER TABLE chien DROP FOREIGN KEY FK_13A4067EA76ED395');
        $this->addSql('DROP INDEX IDX_13A4067EA76ED395 ON chien');
        $this->addSql('ALTER TABLE chien DROP user_id');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CA76ED395');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CFE292D59');
    }
}
