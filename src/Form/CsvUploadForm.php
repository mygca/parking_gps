<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 17/10/2019
 * Time: 12:39
 */

namespace App\Form;

use phpDocumentor\Reflection\Types\Integer;
use function Sodium\add;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class CsvUploadForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('NameFile', TextType::class, [
                'label' => 'File name',
                'attr' => ['placeholder' => 'File name']

            ])
            ->add('file', FileType::class, [
                'label' => 'File (CSV)',
            ])
            ->add('save', SubmitType::class, [
                'label' => 'Send'
            ])
        ;




    }

}