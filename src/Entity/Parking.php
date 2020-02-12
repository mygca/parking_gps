<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Code;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $GeoPoint;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ParkName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $NbrPlace;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Address;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Zipcode;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $City;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Handicape;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $Camera;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Company;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $MaxHeight;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $FullTime;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $MotoAccess;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $PriceDay;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $PriceWeek;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $OpenTime;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $CloseTime;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $PlacePMR;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $PlaceElec;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $PlaceMoto;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->Code;
    }

    public function setCode(?string $Code): self
    {
        $this->Code = $Code;

        return $this;
    }

    public function getGeoPoint(): ?string
    {
        return $this->GeoPoint;
    }

    public function setGeoPoint(string $GeoPoint): self
    {
        $this->GeoPoint = $GeoPoint;

        return $this;
    }

    public function getParkName(): ?string
    {
        return $this->ParkName;
    }

    public function setParkName(string $ParkName): self
    {
        $this->ParkName = $ParkName;

        return $this;
    }

    public function getNbrPlace(): ?string
    {
        return $this->NbrPlace;
    }

    public function setNbrPlace(?string $NbrPlace): self
    {
        $this->NbrPlace = $NbrPlace;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->Address;
    }

    public function setAddress(string $Address): self
    {
        $this->Address = $Address;

        return $this;
    }

    public function getZipcode(): ?string
    {
        return $this->Zipcode;
    }

    public function setZipcode(string $Zipcode): self
    {
        $this->Zipcode = $Zipcode;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->City;
    }

    public function setCity(string $City): self
    {
        $this->City = $City;

        return $this;
    }

    public function getHandicape(): ?bool
    {
        return $this->Handicape;
    }

    public function setHandicape(bool $Handicape): self
    {
        $this->Handicape = $Handicape;

        return $this;
    }

    public function getCamera(): ?bool
    {
        return $this->Camera;
    }

    public function setCamera(?bool $Camera): self
    {
        $this->Camera = $Camera;

        return $this;
    }

    public function getCompany(): ?string
    {
        return $this->Company;
    }

    public function setCompany(?string $Company): self
    {
        $this->Company = $Company;

        return $this;
    }

    public function getMaxHeight(): ?string
    {
        return $this->MaxHeight;
    }

    public function setMaxHeight(?string $MaxHeight): self
    {
        $this->MaxHeight = $MaxHeight;

        return $this;
    }

    public function getFullTime(): ?bool
    {
        return $this->FullTime;
    }

    public function setFullTime(?bool $FullTime): self
    {
        $this->FullTime = $FullTime;

        return $this;
    }

    public function getMotoAccess(): ?bool
    {
        return $this->MotoAccess;
    }

    public function setMotoAccess(?bool $MotoAccess): self
    {
        $this->MotoAccess = $MotoAccess;

        return $this;
    }

    public function getPriceDay(): ?string
    {
        return $this->PriceDay;
    }

    public function setPriceDay(?string $PriceDay): self
    {
        $this->PriceDay = $PriceDay;

        return $this;
    }

    public function getPriceWeek(): ?string
    {
        return $this->PriceWeek;
    }

    public function setPriceWeek(?string $PriceWeek): self
    {
        $this->PriceWeek = $PriceWeek;

        return $this;
    }

    public function getOpenTime(): ?string
    {
        return $this->OpenTime;
    }

    public function setOpenTime(?string $OpenTime): self
    {
        $this->OpenTime = $OpenTime;

        return $this;
    }

    public function getCloseTime(): ?string
    {
        return $this->CloseTime;
    }

    public function setCloseTime(?string $CloseTime): self
    {
        $this->CloseTime = $CloseTime;

        return $this;
    }

    public function getPlacePMR(): ?string
    {
        return $this->PlacePMR;
    }

    public function setPlacePMR(?string $PlacePMR): self
    {
        $this->PlacePMR = $PlacePMR;

        return $this;
    }

    public function getPlaceElec(): ?string
    {
        return $this->PlaceElec;
    }

    public function setPlaceElec(?string $PlaceElec): self
    {
        $this->PlaceElec = $PlaceElec;

        return $this;
    }

    public function getPlaceMoto(): ?string
    {
        return $this->PlaceMoto;
    }

    public function setPlaceMoto(?string $PlaceMoto): self
    {
        $this->PlaceMoto = $PlaceMoto;

        return $this;
    }
}
