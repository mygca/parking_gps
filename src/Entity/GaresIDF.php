<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;



/**
 *
 * @ApiResource
 * @ORM\Entity(repositoryClass="App\Repository\GaresIDFRepository")
 *
 */
class GaresIDF
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $geopoint;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $geoshape;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_gare;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_long;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_iv;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ligne;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ligne_code;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $exploitant;

    /**
     * @ORM\Column(type="integer")
     */
    private $gares_id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $indice_ligne;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $reseau;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $x;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $y;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Parking")
     * @ApiSubresource
     */
    private $parkings;

    public function __construct()
    {
        $this->parkings = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(string $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getGeopoint(): ?string
    {
        return $this->geopoint;
    }

    public function setGeopoint(string $geopoint): self
    {
        $this->geopoint = $geopoint;

        return $this;
    }

    public function getGeoshape(): ?string
    {
        return $this->geoshape;
    }

    public function setGeoshape(string $geoshape): self
    {
        $this->geoshape = $geoshape;

        return $this;
    }

    public function getNomGare(): ?string
    {
        return $this->nom_gare;
    }

    public function setNomGare(string $nom_gare): self
    {
        $this->nom_gare = $nom_gare;

        return $this;
    }

    public function getNomLong(): ?string
    {
        return $this->nom_long;
    }

    public function setNomLong(string $nom_long): self
    {
        $this->nom_long = $nom_long;

        return $this;
    }

    public function getNomIv(): ?string
    {
        return $this->nom_iv;
    }

    public function setNomIv(string $nom_iv): self
    {
        $this->nom_iv = $nom_iv;

        return $this;
    }

    public function getLigne(): ?string
    {
        return $this->ligne;
    }

    public function setLigne(string $ligne): self
    {
        $this->ligne = $ligne;

        return $this;
    }

    public function getLigneCode(): ?string
    {
        return $this->ligne_code;
    }

    public function setLigneCode(string $ligne_code): self
    {
        $this->ligne_code = $ligne_code;

        return $this;
    }

    public function getExploitant(): ?string
    {
        return $this->exploitant;
    }

    public function setExploitant(string $exploitant): self
    {
        $this->exploitant = $exploitant;

        return $this;
    }

    public function getGaresId(): ?int
    {
        return $this->gares_id;
    }

    public function setGaresId(int $gares_id): self
    {
        $this->gares_id = $gares_id;

        return $this;
    }

    public function getIndiceLigne(): ?string
    {
        return $this->indice_ligne;
    }

    public function setIndiceLigne(string $indice_ligne): self
    {
        $this->indice_ligne = $indice_ligne;

        return $this;
    }

    public function getReseau(): ?string
    {
        return $this->reseau;
    }

    public function setReseau(string $reseau): self
    {
        $this->reseau = $reseau;

        return $this;
    }

    public function getX(): ?string
    {
        return $this->x;
    }

    public function setX(string $x): self
    {
        $this->x = $x;

        return $this;
    }

    public function getY(): ?string
    {
        return $this->y;
    }

    public function setY(string $y): self
    {
        $this->y = $y;

        return $this;
    }

    /**
     * @return Collection|Parking[]
     */
    public function getParkings(): Collection
    {
        return $this->parkings;
    }

    public function addParking(Parking $parking): self
    {
        if (!$this->parkings->contains($parking)) {
            $this->parkings[] = $parking;
            $parking->addGaresID($this);
        }

        return $this;
    }

    public function removeParking(Parking $parking): self
    {
        if ($this->parkings->contains($parking)) {
            $this->parkings->removeElement($parking);
            $parking->removeGaresID($this);
        }

        return $this;
    }
}
