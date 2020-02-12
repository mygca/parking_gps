<?php
/**
 * Created by PhpStorm.
 * User: starwox
 * Date: 05/02/2020
 * Time: 14:56
 */

namespace App\Tests\Controller;


use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class MapControllerTest extends WebTestCase
{
    public function testHome()
    {
        $client = static::createclient();

        $client->request('get', '/');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }

}