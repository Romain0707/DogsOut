<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Attribute as Vich;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity]
#[Vich\Uploadable]
class BaladeImage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'images')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Balade $balade = null;

    #[Vich\UploadableField(mapping: 'balade_images', fileNameProperty: 'filename')]
    #[Assert\File(maxSize: '5M')]
    private ?File $imageFile = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $filename = null;

    #[ORM\Column(type: 'smallint', options: ['default' => 0])]
    private int $position = 0;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    public function getId(): ?int { return $this->id; }

    public function getBalade(): ?Balade { return $this->balade; }
    public function setBalade(?Balade $balade): static
    {
        $this->balade = $balade;
        return $this;
    }

    public function getImageFile(): ?File { return $this->imageFile; }
    public function setImageFile(?File $imageFile): static
    {
        $this->imageFile = $imageFile;
        // Requis par VichUploader pour déclencher la mise à jour
        if ($imageFile !== null) {
            $this->updatedAt = new \DateTimeImmutable();
        }
        return $this;
    }

    public function getFilename(): ?string { return $this->filename; }
    public function setFilename(?string $filename): static
    {
        $this->filename = $filename;
        return $this;
    }

    public function getPosition(): int { return $this->position; }
    public function setPosition(int $position): static
    {
        $this->position = $position;
        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable { return $this->updatedAt; }
}
