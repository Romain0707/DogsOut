<?php

namespace App\Entity;

use App\Repository\GroupEventRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GroupEventRepository::class)]
class GroupEvent
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'groupEvents')]
    #[ORM\JoinColumn(nullable: false)]
    private ?UserGroup $usergroup = null;

    #[ORM\ManyToOne(inversedBy: 'groupEvents')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Balade $balade = null;

    #[ORM\ManyToOne(inversedBy: 'groupEvents')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $proposedBy = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $eventDate = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    /**
     * @var Collection<int, GroupEventResponse>
     */
    #[ORM\OneToMany(targetEntity: GroupEventResponse::class, mappedBy: 'groupEvent')]
    private Collection $groupEventResponses;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->groupEventResponses = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsergroup(): ?UserGroup
    {
        return $this->usergroup;
    }

    public function setUsergroup(?UserGroup $usergroup): static
    {
        $this->usergroup = $usergroup;

        return $this;
    }

    public function getBalade(): ?Balade
    {
        return $this->balade;
    }

    public function setBalade(?Balade $balade): static
    {
        $this->balade = $balade;

        return $this;
    }

    public function getProposedBy(): ?User
    {
        return $this->proposedBy;
    }

    public function setProposedBy(?User $proposedBy): static
    {
        $this->proposedBy = $proposedBy;

        return $this;
    }

    public function getEventDate(): ?\DateTimeImmutable
    {
        return $this->eventDate;
    }

    public function setEventDate(\DateTimeImmutable $eventDate): static
    {
        $this->eventDate = $eventDate;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return Collection<int, GroupEventResponse>
     */
    public function getGroupEventResponses(): Collection
    {
        return $this->groupEventResponses;
    }

    public function addGroupEventResponse(GroupEventResponse $groupEventResponse): static
    {
        if (!$this->groupEventResponses->contains($groupEventResponse)) {
            $this->groupEventResponses->add($groupEventResponse);
            $groupEventResponse->setGroupEvent($this);
        }

        return $this;
    }

    public function removeGroupEventResponse(GroupEventResponse $groupEventResponse): static
    {
        if ($this->groupEventResponses->removeElement($groupEventResponse)) {
            if ($groupEventResponse->getGroupEvent() === $this) {
                $groupEventResponse->setGroupEvent(null);
            }
        }

        return $this;
    }
}
