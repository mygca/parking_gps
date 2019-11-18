<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 18/11/2019
 * Time: 10:25
 */

namespace App\Form;


use Doctrine\DBAL\Types\IntegerType;
use Doctrine\DBAL\Types\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;

class UserForm
{


    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('login', TextType::class, [
                'label' => 'Login',
                'attr' => ['placeholder' => 'Login'],
            ])
            ->add('password', TextType::class, [
                'label' => 'Password',
                'attr' => ['placeholder' => 'Password'],
            ])
            ->add('email', TextType::class, [
                'label' => 'Email',
                'attr' => ['placeholder' => 'Email'],
            ])
            ->add('phone', IntegerType::class, [
                'label' => 'Phone',
                'attr' => ['placeholder' => 'Phone Number'],
            ])
            ->add('agreeTerms', CheckboxType::class, [
                'label' => 'Agree ?',
                'mapped' => false
            ])
            ->add('submit', SubmitType::class, ['label' => 'Submit'])
        ;
    }


}