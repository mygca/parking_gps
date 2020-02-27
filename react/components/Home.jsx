import React, { useEffect } from "react";

import Navigation from './Global/Navigation';
import Logo from './Global/Logo';
import Rellax from 'rellax';
//import Parallax from './../functions/map/parallax'
//import getParallax from './../functions/map/parallax';


const introImg= require('./../img/home/intro.png')
const step1Img= require('./../img/home/step--1.png')
const step2Img= require('./../img/home/step--2.png')
const step3Img= require('./../img/home/step--3.png')

const Home = ({isHome, setIsHome,setIsSidebarFavoirit,isSidebarFavoirit,listFavorit,isPopUpNav,setPopUpNav,setMoodConnection}) => {

  function handlerClick(){
    {setIsHome("false")}
  }
  function handlerInputClick(){
    {setPopUpNav("true")}
    {setMoodConnection("login")}
  }
  // function handlerInput(){
  //   {setIsHome("false")}
  // }

  useEffect(() => {
    var rellax = new Rellax('.rellax');
  }, []);

  return (
    <div className="wrapper--home">
      <Navigation isHome={isHome} setIsHome={setIsHome} listFavorit={listFavorit}/>

      <section className="section--intro intro">
        
        <div className="intro__textbox" >
          <Logo />
          <h2>HELLO PARKING</h2>
          
          {window.innerWidth<760 === true?
          <div>
            <p>Rentrez votre mail pour récupérer vos Favoris</p>
            <button className="button button--primary" onClick={handlerInputClick}>Login</button>
          </div>
            
            :
            <div>
              <p>Trouvez le parking adapté et situé à proximité d’une station RER pour rejoindre votre épreuve sportive lors des <span>JO 2024</span></p>
              <button className="button button--primary" onClick={handlerClick}>Start</button>
            </div>
          }
        </div>
        <img src={introImg} className="intro__image rellax" data-rellax-speed="4" alt=""/>
      </section>

      <section className="section--besoin besoin rellax" data-rellax-speed="1">
        <p>Vous souhaitez garer votre voiture en <span>evitant les embouteillages</span> pour rejoindre vos <span>épreuves sportives ?</span></p>
        <p><span>On t’aide a trouver un parking à coté du RER</span></p>
      </section>

      <section className="section--steps steps">
        <div className="step__box">
          <div className="step__textBox rellax" data-rellax-speed="-0.5">
            <h2>CHOISIR</h2>
            <p >Indiquez votre direction d’arrivée sur Paris, et choissisez l’arrêt de RER sur votre chemin pour rejoindre votre évènement.</p>
          </div>
          <img src={step3Img} className="step__image rellax" data-rellax-speed="2" alt=""/>

        </div>

        <div className="step__box">
          <div className="step__textBox rellax" data-rellax-speed="-0.5">
            <h2>SÉLECTIONNER</h2>
            <p>Sélectionnez des parkings adaptés pour garer votre voiture, et ajoutez les à votre liste. </p>
          </div>
          <img src={step2Img} className="step__image rellax" data-rellax-speed="1.2" alt=""/>
        </div>

        <div className="step__box">
          <div className="step__textBox rellax" data-rellax-speed="-0.5">
            <h2>VOYAGER</h2>
            <p>Retrouvez votre liste sur votre sur votre mobile, et accedez a vos itinéraires pour voyager en tranquillité avec lien Waze.</p>
          </div>
          <img src={step1Img} className="step__image rellax" data-rellax-speed="1.2" alt=""/>
        </div>
      </section>

      {/* <section className="section--avantage avantage">
        <div className="avantage__box">
          <h3>Aventage</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem, ea ipsum ipsam cupiditate at distinctio hic iusto ullam. Officia repudiandae delectus repellendus eius sint est hic, veniam alias labore.</p>
        </div>

        <div className="avantage__box">
          <h3>Aventage</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem, ea ipsum ipsam cupiditate at distinctio hic iusto ullam. Officia repudiandae delectus repellendus eius sint est hic, veniam alias labore.</p>
        </div>
        <div className="avantage__box">
          <h3>Aventage</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem, ea ipsum ipsam cupiditate at distinctio hic iusto ullam. Officia repudiandae delectus repellendus eius sint est hic, veniam alias labore.</p>
        </div>
      </section> */}

      <footer><p>Placeholder</p></footer>

    </div>

  );
}

export default Home;