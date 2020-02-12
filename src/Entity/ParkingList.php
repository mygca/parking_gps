<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\ParkingListRepository")
 */
class ParkingList
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
    private $GeoPoint;

    /**
     * @ORM\Column(type="integer")
     */
    private $RecordId;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ParkName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Company;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Address;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $City;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $Zipcode;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $GareId;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $FullTime;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $TimeOpen;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $TimeClose;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $PriceDay;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $PriceWeek;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $Camera;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $handicape;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $MaxHeight;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $NumberPlaces;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getRecordId(): ?int
    {
        return $this->RecordId;
    }

    public function setRecordId(int $RecordId): self
    {
        $this->RecordId = $RecordId;

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

    public function getCompany(): ?string
    {
        return $this->Company;
    }

    public function setCompany(?string $Company): self
    {
        $this->Company = $Company;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->Address;
    }

    public function setAddress(?string $Address): self
    {
        $this->Address = $Address;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->City;
    }

    public function setCity(?string $City): self
    {
        $this->City = $City;

        return $this;
    }

    public function getZipcode(): ?int
    {
        return $this->Zipcode;
    }

    public function setZipcode(?int $Zipcode): self
    {
        $this->Zipcode = $Zipcode;

        return $this;
    }

    public function getGareId(): ?int
    {
        return $this->GareId;
    }

    public function setGareId(?int $GareId): self
    {
        $this->GareId = $GareId;

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

    public function getTimeOpen(): ?string
    {
        return $this->TimeOpen;
    }

    public function setTimeOpen(?string $TimeOpen): self
    {
        $this->TimeOpen = $TimeOpen;

        return $this;
    }

    public function getTimeClose(): ?string
    {
        return $this->TimeClose;
    }

    public function setTimeClose(?string $TimeClose): self
    {
        $this->TimeClose = $TimeClose;

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

    public function getCamera(): ?bool
    {
        return $this->Camera;
    }

    public function setCamera(?bool $Camera): self
    {
        $this->Camera = $Camera;

        return $this;
    }

    public function getHandicape(): ?bool
    {
        return $this->handicape;
    }

    public function setHandicape(?bool $handicape): self
    {
        $this->handicape = $handicape;

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

    public function getNumberPlaces(): ?string
    {
        return $this->NumberPlaces;
    }

    public function setNumberPlaces(?string $NumberPlaces): self
    {
        $this->NumberPlaces = $NumberPlaces;

        return $this;
    }
}
