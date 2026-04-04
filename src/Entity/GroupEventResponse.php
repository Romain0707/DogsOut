<?php

namespace App\Entity;

use App\Repository\GroupEventResponseRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GroupEventResponseRepository::class)]
class GroupEventResponse
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'groupEventResponses')]
    #[ORM\JoinColumn(nullable: false)]
    private ?GroupEvent $groupEvent = null;

    #[ORM\ManyToOne(inversedBy: 'groupEventResponses')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\Column(length: 20)]
    private ?string $availability = 'maybe';

    #[ORM\Column]
    private ?\DateTimeImmutable $respondedAt = null;

    public function __construct()
    {
        $this->respondedAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGroupEvent(): ?GroupEvent
    {
        return $this->groupEvent;
    }

    public function setGroupEvent(?GroupEvent $groupEvent): static
    {
        $this->groupEvent = $groupEvent;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getAvailability(): ?string
    {
        return $this->availability;
    }

    public function setAvailability(string $availability): static
    {
        $this->availability = $availability;

        return $this;
    }

    public function getRespondedAt(): ?\DateTimeImmutable
    {
        return $this->respondedAt;
    }

    public function setRespondedAt(\DateTimeImmutable $respondedAt): static
    {
        $this->respondedAt = $respondedAt;

        return $this;
    }
}
