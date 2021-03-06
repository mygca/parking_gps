<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 18/11/2019
 * Time: 10:14
 */

namespace App\Controller;

use App\Entity\Users;
use App\Form\ContactForm;
use App\Form\UserFormType;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


class UserController extends AbstractController
{

    /**
     * @Route("/register/sf", name="register_sf")
     */
    public function register(Request $req, UserPasswordEncoderInterface $passwordEncoder)
    {

        $register = new Users();

        $form = $this->createForm(UserFormType::class, $register);

        $form->handleRequest($req);


        if ($form->isSubmitted() && $form->isValid())
        {
            $em = $this->getDoctrine()->getManager();



            $register->setPassword(
              $passwordEncoder->encodePassword($register, $form->get('password')->getData())
            );
            $register->setEmail($form->get('email')->getData());

            $register->setLogin($form->get('login')->getData());

            $register->setPhone($form->get('phone')->getData());


            $em->persist($register);
            $em->flush();


            return $this->redirectToRoute('login');
        }

        return $this->render('forms/register.html.twig', [
            'controller_name' => 'register',
            'form' => $form->createView()
        ]);
    }

}