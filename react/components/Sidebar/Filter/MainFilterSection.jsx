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
      <h2 className="headline--etape">Trouve la ligne du Train qui te rammner du parking a ton epreuve!</h2>

      <FilterBox setSport={setSport} sport={sport}  name="site" text="Quelle épreuve allez vous voir?"/>
      <FilterBox setDirection={setDirection} direction={direction} name="direction" text="Direction d'arrive"/>



      <div className="box__filterText">
 
        {direction.value !== "center"?
          <div className="wrapper--flex box__filterText__Box">
            <img src="https://i.pinimg.com/originals/20/27/1e/20271eec1a8a6c42f1b1679737e36c38.png" alt=""/>
            <p>Pour <span>evite la haute circulation</span> et des bouchons essayer de te <span>gare le plus au {direction.value}</span> du ligne {sport.lines} pour sauvgarde du temps.</p>
          </div>
          
        :""}
      </div>

      
      {sport.value !== "all" && direction.value !== "center" ?
        <button className="button--primary" onClick={handlerClick}>Trouve un parking</button>
      :""}

    </div>
  );
}

export default MainFilterSection;