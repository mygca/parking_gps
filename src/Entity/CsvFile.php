<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Entity(repositoryClass="App\Repository\CsvFileRepository")
 */
class CsvFile
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     */
    private $NameFile;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\File(
     *     mimeTypes = {"application/csv" , "application/json"},
     *     mimeTypesMessage = "Please, send a CSV file"
     *     )
     */
    private $file;

    /**
     * @ORM\Column(type="boolean")
     */
    private $IntoDB;


    public function __construct()
    {
        $this->setIntoDB(false);
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameFile(): ?string
    {
        return $this->NameFile;
    }

    public function setNameFile(string $NameFile): self
    {
        $this->NameFile = $NameFile;

        return $this;
    }

    public function getFile(): ?string
    {
        return $this->file;
    }

    public function setFile(string $file): self
    {
        $this->file = $file;

        return $this;
    }

    public function getIntoDB(): ?bool
    {
        return $this->IntoDB;
    }

    public function setIntoDB(bool $IntoDB): self
    {
        $this->IntoDB = $IntoDB;

        return $this;
    }
}
