<?php

namespace App\Entity;

use App\Repository\BaladeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BaladeRepository::class)]
class Balade
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column]
    private ?bool $isPublic = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\ManyToOne(inversedBy: 'balades')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    /**
     * @var Collection<int, Comment>
     */
    #[ORM\OneToMany(targetEntity: Comment::class, mappedBy: 'balade')]
    private Collection $comments;

    #[ORM\Column(type: 'json')]
    private array $routeGeoJson = [];

    #[ORM\Column(type: 'json')]
    private array $waypointsJson = [];

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $snapshotPath = null;

    #[ORM\Column(nullable: true)]
    private ?int $distanceMeters = null;

    #[ORM\Column(nullable: true)]
    private ?int $durationSeconds = null;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

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

    public function isPublic(): ?bool
    {
        return $this->isPublic;
    }

    public function setIsPublic(bool $isPublic): static
    {
        $this->isPublic = $isPublic;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection<int, Comment>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): static
    {
        if (!$this->comments->contains($comment)) {
            $this->comments->add($comment);
            $comment->setBalade($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): static
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getBalade() === $this) {
                $comment->setBalade(null);
            }
        }

        return $this;
    }

    public function getRouteGeoJson(): array
    {
        return $this->routeGeoJson;
    }

    public function setRouteGeoJson(array $routeGeoJson): static
    {
        $this->routeGeoJson = $routeGeoJson;

        return $this;
    }

    public function getWaypointsJson(): array
    {
        return $this->waypointsJson;
    }

    public function setWaypointsJson(array $waypointsJson): self
    {
        $this->waypointsJson = $waypointsJson;
        return $this;
    }

    public function getSnapshotPath(): ?string
    {
        return $this->snapshotPath;
    }

    public function setSnapshotPath(?string $snapshotPath): static
    {
        $this->snapshotPath = $snapshotPath;

        return $this;
    }

    public function getDistanceMeters(): ?int
    {
        return $this->distanceMeters;
    }

    public function setDistanceMeters(?int $distanceMeters): static
    {
        $this->distanceMeters = $distanceMeters;

        return $this;
    }

    public function getDurationSeconds(): ?int
    {
        return $this->durationSeconds;
    }

    public function setDurationSeconds(?int $durationSeconds): static
    {
        $this->durationSeconds = $durationSeconds;

        return $this;
    }
}
