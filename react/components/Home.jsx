import React from 'react';

import Navigation from './Global/Navigation';

const Home = ({isHome, setIsHome}) => {

  function handlerClick(){
    {setIsHome("false")}
  }
  return (
    <div className="wrapper--home">
      <Navigation isHome={isHome} setIsHome={setIsHome}/>

      <section className="section--intro intro">
        <div className="intro__textbox">
          <h2>HELLO PARKING</h2>
          <p>Trouvez le parking adapté et situé à proximité d’une station RER pour rejoindre votre épreuve sportive lors des JO 2024</p>
          <button class="button" onClick={handlerClick}>Start</button>
        </div>
      </section>

      <section className="section--besoin besoin">
        <p>Vous souhaitez garer votre voiture en evitant les embouteillages pour rejoindre vos épreuves sportives ?</p>
        <p>On t’aide a trouver un parking à coté du RER</p>
      </section>

      <section className="section--avantage avantage">
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
      </section>

    </div>
  );
}

export default Home;