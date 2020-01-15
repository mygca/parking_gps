<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SaemesRepository")
 */
class Saemes
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $geo;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $code_parc;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $type_parc;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_parking;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $zipcode;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $tel;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nb_place;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $hauteur_max;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGeo(): ?string
    {
        return $this->geo;
    }

    public function setGeo(string $geo): self
    {
        $this->geo = $geo;

        return $this;
    }

    public function getCodeParc(): ?string
    {
        return $this->code_parc;
    }

    public function setCodeParc(string $code_parc): self
    {
        $this->code_parc = $code_parc;

        return $this;
    }

    public function getTypeParc(): ?string
    {
        return $this->type_parc;
    }

    public function setTypeParc(string $type_parc): self
    {
        $this->type_parc = $type_parc;

        return $this;
    }

    public function getNomParking(): ?string
    {
        return $this->nom_parking;
    }

    public function setNomParking(string $nom_parking): self
    {
        $this->nom_parking = $nom_parking;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getZipcode(): ?string
    {
        return $this->zipcode;
    }

    public function setZipcode(string $zipcode): self
    {
        $this->zipcode = $zipcode;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(string $tel): self
    {
        $this->tel = $tel;

        return $this;
    }

    public function getNbPlace(): ?string
    {
        return $this->nb_place;
    }

    public function setNbPlace(string $nb_place): self
    {
        $this->nb_place = $nb_place;

        return $this;
    }

    public function getHauteurMax(): ?string
    {
        return $this->hauteur_max;
    }

    public function setHauteurMax(string $hauteur_max): self
    {
        $this->hauteur_max = $hauteur_max;

        return $this;
    }
}
