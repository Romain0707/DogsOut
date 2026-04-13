<?php

namespace App\Entity;

use App\Repository\BaladeTagRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BaladeTagRepository::class)]
#[ORM\UniqueConstraint(name: 'unique_balade_tag_name', columns: ['name'])]
class BaladeTag
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $name = null;

    #[ORM\Column(length: 100)]
    private ?string $slug = null;

    #[ORM\Column]
    private ?bool $isPreset = false;

    /**
     * @var Collection<int, Balade>
     */
    #[ORM\ManyToMany(targetEntity: Balade::class, mappedBy: 'baladeTags')]
    private Collection $balades;

    public function __construct()
    {
        $this->balades = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    public function isPreset(): ?bool
    {
        return $this->isPreset;
    }

    public function setIsPreset(bool $isPreset): static
    {
        $this->isPreset = $isPreset;

        return $this;
    }

    /**
     * @return Collection<int, Balade>
     */
    public function getBalades(): Collection
    {
        return $this->balades;
    }

    public function addBalade(Balade $balade): static
    {
        if (!$this->balades->contains($balade)) {
            $this->balades->add($balade);
            $balade->addBaladeTag($this);
        }

        return $this;
    }

    public function removeBalade(Balade $balade): static
    {
        if ($this->balades->removeElement($balade)) {
            $balade->removeBaladeTag($this);
        }

        return $this;
    }
}
