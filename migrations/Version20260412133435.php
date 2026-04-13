<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260412133435 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE balade_balade_tag (balade_id INT NOT NULL, balade_tag_id INT NOT NULL, INDEX IDX_E3655D13FE292D59 (balade_id), INDEX IDX_E3655D13F1CE47DA (balade_tag_id), PRIMARY KEY (balade_id, balade_tag_id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE balade_tag (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, slug VARCHAR(100) NOT NULL, is_preset TINYINT NOT NULL, UNIQUE INDEX unique_balade_tag_name (name), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE chien_chien_tag (chien_id INT NOT NULL, chien_tag_id INT NOT NULL, INDEX IDX_216D3FCEBFCF400E (chien_id), INDEX IDX_216D3FCEEEE40DDE (chien_tag_id), PRIMARY KEY (chien_id, chien_tag_id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE chien_tag (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, slug VARCHAR(100) NOT NULL, is_preset TINYINT NOT NULL, UNIQUE INDEX unique_chien_tag_name (name), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE balade_balade_tag ADD CONSTRAINT FK_E3655D13FE292D59 FOREIGN KEY (balade_id) REFERENCES balade (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE balade_balade_tag ADD CONSTRAINT FK_E3655D13F1CE47DA FOREIGN KEY (balade_tag_id) REFERENCES balade_tag (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE chien_chien_tag ADD CONSTRAINT FK_216D3FCEBFCF400E FOREIGN KEY (chien_id) REFERENCES chien (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE chien_chien_tag ADD CONSTRAINT FK_216D3FCEEEE40DDE FOREIGN KEY (chien_tag_id) REFERENCES chien_tag (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE balade ADD CONSTRAINT FK_540083D7A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE balade_image ADD CONSTRAINT FK_DDCD887AFE292D59 FOREIGN KEY (balade_id) REFERENCES balade (id)');
        $this->addSql('ALTER TABLE chien ADD CONSTRAINT FK_13A4067E6E59D40D FOREIGN KEY (race_id) REFERENCES race (id)');
        $this->addSql('ALTER TABLE chien ADD CONSTRAINT FK_13A4067EA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CFE292D59 FOREIGN KEY (balade_id) REFERENCES balade (id)');
        $this->addSql('ALTER TABLE group_event ADD CONSTRAINT FK_6B8221C0D2112630 FOREIGN KEY (usergroup_id) REFERENCES user_group (id)');
        $this->addSql('ALTER TABLE group_event ADD CONSTRAINT FK_6B8221C0FE292D59 FOREIGN KEY (balade_id) REFERENCES balade (id)');
        $this->addSql('ALTER TABLE group_event ADD CONSTRAINT FK_6B8221C0DAB5A938 FOREIGN KEY (proposed_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE group_event_response ADD CONSTRAINT FK_E01A2B5978C7A4F4 FOREIGN KEY (group_event_id) REFERENCES group_event (id)');
        $this->addSql('ALTER TABLE group_event_response ADD CONSTRAINT FK_E01A2B59A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE group_member ADD CONSTRAINT FK_A36222A8D2112630 FOREIGN KEY (usergroup_id) REFERENCES user_group (id)');
        $this->addSql('ALTER TABLE group_member ADD CONSTRAINT FK_A36222A8A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FF675F31B FOREIGN KEY (author_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307F9AC0396 FOREIGN KEY (conversation_id) REFERENCES conversation (id)');
        $this->addSql('ALTER TABLE participant ADD CONSTRAINT FK_D79F6B11A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE participant ADD CONSTRAINT FK_D79F6B119AC0396 FOREIGN KEY (conversation_id) REFERENCES conversation (id)');
        $this->addSql('ALTER TABLE user_group ADD CONSTRAINT FK_8F02BF9DB03A8386 FOREIGN KEY (created_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_group ADD CONSTRAINT FK_8F02BF9D9AC0396 FOREIGN KEY (conversation_id) REFERENCES conversation (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE balade_balade_tag DROP FOREIGN KEY FK_E3655D13FE292D59');
        $this->addSql('ALTER TABLE balade_balade_tag DROP FOREIGN KEY FK_E3655D13F1CE47DA');
        $this->addSql('ALTER TABLE chien_chien_tag DROP FOREIGN KEY FK_216D3FCEBFCF400E');
        $this->addSql('ALTER TABLE chien_chien_tag DROP FOREIGN KEY FK_216D3FCEEEE40DDE');
        $this->addSql('DROP TABLE balade_balade_tag');
        $this->addSql('DROP TABLE balade_tag');
        $this->addSql('DROP TABLE chien_chien_tag');
        $this->addSql('DROP TABLE chien_tag');
        $this->addSql('ALTER TABLE balade DROP FOREIGN KEY FK_540083D7A76ED395');
        $this->addSql('ALTER TABLE balade_image DROP FOREIGN KEY FK_DDCD887AFE292D59');
        $this->addSql('ALTER TABLE chien DROP FOREIGN KEY FK_13A4067E6E59D40D');
        $this->addSql('ALTER TABLE chien DROP FOREIGN KEY FK_13A4067EA76ED395');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CA76ED395');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CFE292D59');
        $this->addSql('ALTER TABLE group_event DROP FOREIGN KEY FK_6B8221C0D2112630');
        $this->addSql('ALTER TABLE group_event DROP FOREIGN KEY FK_6B8221C0FE292D59');
        $this->addSql('ALTER TABLE group_event DROP FOREIGN KEY FK_6B8221C0DAB5A938');
        $this->addSql('ALTER TABLE group_event_response DROP FOREIGN KEY FK_E01A2B5978C7A4F4');
        $this->addSql('ALTER TABLE group_event_response DROP FOREIGN KEY FK_E01A2B59A76ED395');
        $this->addSql('ALTER TABLE group_member DROP FOREIGN KEY FK_A36222A8D2112630');
        $this->addSql('ALTER TABLE group_member DROP FOREIGN KEY FK_A36222A8A76ED395');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FF675F31B');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307F9AC0396');
        $this->addSql('ALTER TABLE participant DROP FOREIGN KEY FK_D79F6B11A76ED395');
        $this->addSql('ALTER TABLE participant DROP FOREIGN KEY FK_D79F6B119AC0396');
        $this->addSql('ALTER TABLE user_group DROP FOREIGN KEY FK_8F02BF9DB03A8386');
        $this->addSql('ALTER TABLE user_group DROP FOREIGN KEY FK_8F02BF9D9AC0396');
    }
}
