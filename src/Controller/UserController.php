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
use App\Form\UserForm;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class UserController extends AbstractController
{

    /**
     * @Route("/register", name="register")
     */
    public function register(Request $req)
    {
        $em = $this->getDoctrine()->getManager();

        if (!isset($register)) {
            $register = new Users();
        }

        $form = $this->createForm(UserForm::class, $register);

        $form->handleRequest($req);



        if ($form->isSubmitted() && $form->isValid())
        {


            $em->persist($register);
            $em->flush();
            return $this->redirectToRoute('login');
        }

        return $this->render('users/register.html.twig', [
            'controller_name' => 'register',
            'form' => $form->createView()
        ]);
    }

}