<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 10/10/2019
 * Time: 16:03
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

class ContactForm extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('last_name', TextType::class, [
                'label' => 'Last name',
                'attr' => ['placeholder' => 'Last Name'],
            ])
            ->add('first_name', TextType::class, [
                'label' => 'First name',
                'attr' => ['placeholder' => 'First Name'],
            ])
            ->add('email', TextType::class, [
                'label' => 'Email',
                'attr' => ['placeholder' => 'Email'],
            ])
            ->add('phone', IntegerType::class, [
                'label' => 'Phone',
                'attr' => ['placeholder' => 'Phone Number'],
            ])
            ->add('message', TextType::class, [
                'label' => 'Message',
                'attr' => ['placeholder' => 'Message'],
            ])
            ->add('file', FileType::class, [
                'label' => 'File (PDF)',
                'required' => false
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'label' => 'Agree ?',
                'mapped' => false
            ])
            ->add('submit', SubmitType::class, ['label' => 'Submit'])
        ;
    }

}