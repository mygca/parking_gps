<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\FavoriteRepository")
 */
class Favorite
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Users", inversedBy="favorites")
     */
    private $UserID;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Parking")
     */
    private $ParkingID;

    public function __construct()
    {
        $this->UserID = new ArrayCollection();
        $this->ParkingID = new ArrayCollection();
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
        return $this->UserID;
    }

    public function addUserID(Users $userID): self
    {
        if (!$this->UserID->contains($userID)) {
            $this->UserID[] = $userID;
        }

        return $this;
    }

    public function removeUserID(Users $userID): self
    {
        if ($this->UserID->contains($userID)) {
            $this->UserID->removeElement($userID);
        }

        return $this;
    }

    /**
     * @return Collection|Parking[]
     */
    public function getParkingID(): Collection
    {
        return $this->ParkingID;
    }

    public function addParkingID(Parking $parkingID): self
    {
        if (!$this->ParkingID->contains($parkingID)) {
            $this->ParkingID[] = $parkingID;
        }

        return $this;
    }

    public function removeParkingID(Parking $parkingID): self
    {
        if ($this->ParkingID->contains($parkingID)) {
            $this->ParkingID->removeElement($parkingID);
        }

        return $this;
    }
}
