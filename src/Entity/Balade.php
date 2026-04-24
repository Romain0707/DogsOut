<?php

namespace App\Entity;

use App\Entity\BaladeImage;
use App\Entity\Comment;
use App\Entity\GroupEvent;
use App\Entity\User;
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

    #[ORM\Column(nullable: true)]
    private ?int $distanceMeters = null;

    #[ORM\Column(nullable: true)]
    private ?int $durationSeconds = null;

    /**
     * @var Collection<int, GroupEvent>
     */
    #[ORM\OneToMany(targetEntity: GroupEvent::class, mappedBy: 'balade')]
    private Collection $groupEvents;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $difficulty = null;

    /** @var Collection<int, BaladeImage> */
    #[ORM\OneToMany(
        mappedBy: 'balade',
        targetEntity: BaladeImage::class,
        cascade: ['persist', 'remove'],
        orphanRemoval: true
    )]
    #[ORM\OrderBy(['position' => 'ASC'])]
    private Collection $images;

    /**
     * @var Collection<int, BaladeTag>
     */
    #[ORM\ManyToMany(targetEntity: BaladeTag::class, inversedBy: 'balades')]
    private Collection $baladeTags;

    /**
     * @var Collection<int, BaladeRating>
     */
    #[ORM\OneToMany(targetEntity: BaladeRating::class, mappedBy: 'balade')]
    private Collection $baladeRatings;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
        $this->groupEvents = new ArrayCollection();
        $this->images      = new ArrayCollection();
        $this->baladeTags = new ArrayCollection();
        $this->baladeRatings = new ArrayCollection();
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

    /**
     * @return Collection<int, GroupEvent>
     */
    public function getGroupEvents(): Collection
    {
        return $this->groupEvents;
    }

    public function addGroupEvent(GroupEvent $groupEvent): static
    {
        if (!$this->groupEvents->contains($groupEvent)) {
            $this->groupEvents->add($groupEvent);
            $groupEvent->setBalade($this);
        }

        return $this;
    }

    public function removeGroupEvent(GroupEvent $groupEvent): static
    {
        if ($this->groupEvents->removeElement($groupEvent)) {
            if ($groupEvent->getBalade() === $this) {
                $groupEvent->setBalade(null);
            }
        }

        return $this;
    }

    public function getDifficulty(): ?string
    {
        return $this->difficulty;
    }

    public function setDifficulty(?string $difficulty): static
    {
        $this->difficulty = $difficulty;
        return $this;
    }

    /** @return Collection<int, BaladeImage> */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(BaladeImage $image): static
    {
        if (!$this->images->contains($image)) {
            $this->images->add($image);
            $image->setBalade($this);
        }
        return $this;
    }

    public function removeImage(BaladeImage $image): static
    {
        if ($this->images->removeElement($image)) {
            if ($image->getBalade() === $this) {
                $image->setBalade(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection<int, BaladeTag>
     */
    public function getBaladeTags(): Collection
    {
        return $this->baladeTags;
    }

    public function addBaladeTag(BaladeTag $baladeTag): static
    {
        if (!$this->baladeTags->contains($baladeTag)) {
            $this->baladeTags->add($baladeTag);
        }

        return $this;
    }

    public function removeBaladeTag(BaladeTag $baladeTag): static
    {
        $this->baladeTags->removeElement($baladeTag);

        return $this;
    }

    /**
     * @return Collection<int, BaladeRating>
     */
    public function getBaladeRatings(): Collection
    {
        return $this->baladeRatings;
    }

    public function addBaladeRating(BaladeRating $baladeRating): static
    {
        if (!$this->baladeRatings->contains($baladeRating)) {
            $this->baladeRatings->add($baladeRating);
            $baladeRating->setBalade($this);
        }

        return $this;
    }

    public function removeBaladeRating(BaladeRating $baladeRating): static
    {
        if ($this->baladeRatings->removeElement($baladeRating)) {
            if ($baladeRating->getBalade() === $this) {
                $baladeRating->setBalade(null);
            }
        }

        return $this;
    }
}
