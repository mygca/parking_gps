<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 17/10/2019
 * Time: 12:37
 */

namespace App\Controller;


use App\Entity\CsvFile;
use App\Form\CsvUploadForm;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManager;



class CsvFileController extends AbstractController
{

    /**
     * @Route("/csv", name="csv")
     */
    public function csv(Request $req)
    {

        $repository = $this->getDoctrine()->getRepository(CsvFile::class);



        return $this->render('index.html.twig', [
            'controller_name' => 'homepage',
            'parking' => $repository->findAll(),
        ]);
    }


    /**
     * @Route("/csv/upload", name="csv_upload")
     */
    public function uploadsCsv(Request $req)
    {
        $em = $this->getDoctrine()->getManager();

        if (!isset($csv)) {
            $csv = new CsvFile();
        }

        $form = $this->createForm(CsvUploadForm::class, $csv);

        $form->handleRequest($req);

        if ($form->isSubmitted() && $form->isValid())
        {

            if (pathinfo($form->get('file')->getData()->getClientOriginalName())['extension'] !== 'csv') {
                return $this->render('forms/csv_upload.html.twig', [
                    'controller_name' => 'homepage',
                    'erreur' => 'Une erreur est survenue sur votre fichier',
                    'form' => $form->createView()
                ]);
            }

            $file = $form->get('file')->getData();

            $filename = $form->get('NameFile')->getData() . '.csv';

            $file->move(
                $this->getParameter('uploads_csv'),
                $filename
            );

            $csv->setFile($filename);
            $em->persist($csv);
            $em->flush();
            return $this->redirectToRoute('homepage');
        }

        return $this->render('forms/csv_upload.html.twig', [
            'controller_name' => 'homepage',
            'erreur' => '',
            'form' => $form->createView()
        ]);
    }



    /**
     * @Route("/csv/import", name="csv_import")
     */
    public function importCSV(Request $req)
    {
        $em = $this->getDoctrine()->getRepository(CsvFile::class);

        $data = $em->findAll();

        dump($data);die();


        return $this->render('forms/csv_upload.html.twig', [
            'controller_name' => 'homepage',
            'data' => $data
        ]);
    }

}