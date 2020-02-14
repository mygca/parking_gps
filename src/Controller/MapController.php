<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 08/10/2019
 * Time: 16:48
 */
namespace App\Controller;

use App\Entity\Contact;
use App\Entity\GaresIDF;
use App\Entity\Parking;
use App\Form\ContactForm;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MapController extends AbstractController
{

    /**
     * @Route("/", name="homepage")
     */
    public function home ()
    {

        // dump($this->getUser());
        $repository = $this->getDoctrine()->getRepository(Parking::class);


        return $this->render('index.html.twig', [
            'controller_name' => 'homepage',
            'parking' => $repository->findAll(),
            ]);
    }


    /**
     * @Route("/contact", name="contact_us")
     */
    public function contactUs(Request $req)
    {
        $em = $this->getDoctrine()->getManager();

        if (!isset($contact)) {
            $contact = new Contact();
        }

        $form = $this->createForm(ContactForm::class, $contact);

        $form->handleRequest($req);



        if ($form->isSubmitted() && $form->isValid())
        {
            $file = $form->get('file')->getData();

            $filename = sha1(random_bytes(14)). '.' . $file->guessExtension();

            $file->move(
              $this->getParameter('pdf_directory'),
              $filename
            );

            $contact->setFile($filename);
            $em->persist($contact);
            $em->flush();
            return $this->redirectToRoute('homepage');
        }

        return $this->render('forms/contact_form.html.twig', [
            'controller_name' => 'contact_us',
            'form' => $form->createView()
        ]);
    }


    /**
     * @Route("/test", name="test")
     */
    public function gare ()
    {

        // dump($this->getUser());
        $repository = $this->getDoctrine()->getRepository(GaresIDF::class)->findAll();
        dump($repository);

        return $this->render('index.html.twig', [
            'controller_name' => 'homepage',
            'parking' => $repository[0],
        ]);
    }

}