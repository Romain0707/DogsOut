<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260411181117 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE balade ADD CONSTRAINT FK_540083D7A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE balade_image ADD CONSTRAINT FK_DDCD887AFE292D59 FOREIGN KEY (balade_id) REFERENCES balade (id)');
        $this->addSql('ALTER TABLE chien ADD image_name VARCHAR(255) DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL');
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
        $this->addSql('ALTER TABLE balade DROP FOREIGN KEY FK_540083D7A76ED395');
        $this->addSql('ALTER TABLE balade_image DROP FOREIGN KEY FK_DDCD887AFE292D59');
        $this->addSql('ALTER TABLE chien DROP FOREIGN KEY FK_13A4067E6E59D40D');
        $this->addSql('ALTER TABLE chien DROP FOREIGN KEY FK_13A4067EA76ED395');
        $this->addSql('ALTER TABLE chien DROP image_name, DROP updated_at');
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
