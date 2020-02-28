import React, { useState } from 'react';

import FilterBox from './FilterBox';
import Button from '../../Global/Button';
import Logo from '../../Global/Logo';
import Popup from '../../Map/Popup';




const MainFilterSection = ({sport,setSport,setIsSelected,isSelected,direction,setDirection}) => {

  

  function handlerClick(){
    {setIsSelected("true")}
  }

  return (
    <div className="wrapper--filter">

      <Logo />
      <h2 className="headline--etape">Dites nous à quelle épreuve sportive vous allez assister et votre direction d'arrivée en région Parisienne et on vous indique quelle(s) ligne(s) de train vous y enmènent.</h2>

      <FilterBox setSport={setSport} sport={sport}  name="site" text="Quelle épreuve allez vous voir?"/>
      <FilterBox setDirection={setDirection} direction={direction} name="direction" text="Direction d'arrivée"/>



      <div className="box__filterText">
 
        {direction.value !== "center"?
          <div className="wrapper--flex box__filterText__Box">
            <img src="https://i.pinimg.com/originals/20/27/1e/20271eec1a8a6c42f1b1679737e36c38.png" alt=""/>
            <p>Pour <span>évite de vous retrouver dans</span> les bouchons essayez de vous <span>garer le plus au {direction.value}</span> du ligne {sport.lines} pour ne pas perdre de temps</p>
          </div>
          
        :""}
      </div>

      
      {sport.value !== "all" && direction.value !== "center" ?
        <button className="button--primary" onClick={handlerClick}>Rechercher un parking</button>
      :""}

    </div>
  );
}

export default MainFilterSection;