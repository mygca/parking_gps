<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ParkingRepository")
 */
class Parking
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
    private $geo_point;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $geo_shape;

    /**
     * @ORM\Column(type="integer")
     */
    private $id_pr;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_pr;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_pl_pr;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_pl_cov;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_pl_pmr;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_pl_elec;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_pl_2rm;

    /**
     * @ORM\Column(type="integer")
     */
    private $nb_pl_v;

    /**
     * @ORM\Column(type="integer")
     */
    private $label_pr;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $moa_pr;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $gestio_pr;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $struct_pr;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $www;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $mes_dates;

    /**
     * @ORM\Column(type="integer")
     */
    private $mes_annees;

    /**
     * @ORM\Column(type="integer")
     */
    private $insee_t;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_comm;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adres_pr;

    /**
     * @ORM\Column(type="integer")
     */
    private $id_ref_lda;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_lda;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_gare;

    /**
     * @ORM\Column(type="integer")
     */
    private $id_ref_zdl;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom_zdl;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGeoPoint(): ?string
    {
        return $this->geo_point;
    }

    public function setGeoPoint(string $geo_point): self
    {
        $this->geo_point = $geo_point;

        return $this;
    }

    public function getGeoShape(): ?string
    {
        return $this->geo_shape;
    }

    public function setGeoShape(string $geo_shape): self
    {
        $this->geo_shape = $geo_shape;

        return $this;
    }

    public function getIdPr(): ?int
    {
        return $this->id_pr;
    }

    public function setIdPr(int $id_pr): self
    {
        $this->id_pr = $id_pr;

        return $this;
    }

    public function getNomPr(): ?string
    {
        return $this->nom_pr;
    }

    public function setNomPr(string $nom_pr): self
    {
        $this->nom_pr = $nom_pr;

        return $this;
    }

    public function getNbPlPr(): ?int
    {
        return $this->nb_pl_pr;
    }

    public function setNbPlPr(int $nb_pl_pr): self
    {
        $this->nb_pl_pr = $nb_pl_pr;

        return $this;
    }

    public function getNbPlCov(): ?int
    {
        return $this->nb_pl_cov;
    }

    public function setNbPlCov(int $nb_pl_cov): self
    {
        $this->nb_pl_cov = $nb_pl_cov;

        return $this;
    }

    public function getNbPlPmr(): ?int
    {
        return $this->nb_pl_pmr;
    }

    public function setNbPlPmr(int $nb_pl_pmr): self
    {
        $this->nb_pl_pmr = $nb_pl_pmr;

        return $this;
    }

    public function getNbPlElec(): ?int
    {
        return $this->nb_pl_elec;
    }

    public function setNbPlElec(int $nb_pl_elec): self
    {
        $this->nb_pl_elec = $nb_pl_elec;

        return $this;
    }

    public function getNbPl2rm(): ?int
    {
        return $this->nb_pl_2rm;
    }

    public function setNbPl2rm(int $nb_pl_2rm): self
    {
        $this->nb_pl_2rm = $nb_pl_2rm;

        return $this;
    }

    public function getNbPlV(): ?int
    {
        return $this->nb_pl_v;
    }

    public function setNbPlV(int $nb_pl_v): self
    {
        $this->nb_pl_v = $nb_pl_v;

        return $this;
    }

    public function getLabelPr(): ?int
    {
        return $this->label_pr;
    }

    public function setLabelPr(int $label_pr): self
    {
        $this->label_pr = $label_pr;

        return $this;
    }

    public function getMoaPr(): ?string
    {
        return $this->moa_pr;
    }

    public function setMoaPr(?string $moa_pr): self
    {
        $this->moa_pr = $moa_pr;

        return $this;
    }

    public function getGestioPr(): ?string
    {
        return $this->gestio_pr;
    }

    public function setGestioPr(?string $gestio_pr): self
    {
        $this->gestio_pr = $gestio_pr;

        return $this;
    }

    public function getStructPr(): ?string
    {
        return $this->struct_pr;
    }

    public function setStructPr(?string $struct_pr): self
    {
        $this->struct_pr = $struct_pr;

        return $this;
    }

    public function getWww(): ?string
    {
        return $this->www;
    }

    public function setWww(?string $www): self
    {
        $this->www = $www;

        return $this;
    }

    public function getMesDates(): ?string
    {
        return $this->mes_dates;
    }

    public function setMesDates(?string $mes_dates): self
    {
        $this->mes_dates = $mes_dates;

        return $this;
    }

    public function getMesAnnees(): ?int
    {
        return $this->mes_annees;
    }

    public function setMesAnnees(int $mes_annees): self
    {
        $this->mes_annees = $mes_annees;

        return $this;
    }

    public function getInseeT(): ?int
    {
        return $this->insee_t;
    }

    public function setInseeT(int $insee_t): self
    {
        $this->insee_t = $insee_t;

        return $this;
    }

    public function getNomComm(): ?string
    {
        return $this->nom_comm;
    }

    public function setNomComm(string $nom_comm): self
    {
        $this->nom_comm = $nom_comm;

        return $this;
    }

    public function getAdresPr(): ?string
    {
        return $this->adres_pr;
    }

    public function setAdresPr(?string $adres_pr): self
    {
        $this->adres_pr = $adres_pr;

        return $this;
    }

    public function getIdRefLda(): ?int
    {
        return $this->id_ref_lda;
    }

    public function setIdRefLda(int $id_ref_lda): self
    {
        $this->id_ref_lda = $id_ref_lda;

        return $this;
    }

    public function getNomLda(): ?string
    {
        return $this->nom_lda;
    }

    public function setNomLda(string $nom_lda): self
    {
        $this->nom_lda = $nom_lda;

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

    public function getIdRefZdl(): ?int
    {
        return $this->id_ref_zdl;
    }

    public function setIdRefZdl(int $id_ref_zdl): self
    {
        $this->id_ref_zdl = $id_ref_zdl;

        return $this;
    }

    public function getNomZdl(): ?string
    {
        return $this->nom_zdl;
    }

    public function setNomZdl(string $nom_zdl): self
    {
        $this->nom_zdl = $nom_zdl;

        return $this;
    }
}
