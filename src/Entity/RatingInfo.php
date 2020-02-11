<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\RatingInfoRepository")
 */
class RatingInfo
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Users", inversedBy="ratingInfos")
     */
    private $userID;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Parking")
     */
    private $parkID;

    public function __construct()
    {
        $this->userID = new ArrayCollection();
        $this->parkID = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Users[]
     */
    public function getUserID(): Collection
    {
        return $this->userID;
    }

    public function addUserID(Users $userID): self
    {
        if (!$this->userID->contains($userID)) {
            $this->userID[] = $userID;
        }

        return $this;
    }

    public function removeUserID(Users $userID): self
    {
        if ($this->userID->contains($userID)) {
            $this->userID->removeElement($userID);
        }

        return $this;
    }

    /**
     * @return Collection|Parking[]
     */
    public function getParkID(): Collection
    {
        return $this->parkID;
    }

    public function addParkID(Parking $parkID): self
    {
        if (!$this->parkID->contains($parkID)) {
            $this->parkID[] = $parkID;
        }

        return $this;
    }

    public function removeParkID(Parking $parkID): self
    {
        if ($this->parkID->contains($parkID)) {
            $this->parkID->removeElement($parkID);
        }

        return $this;
    }
}
