import React, { useState } from 'react';

import FilterBox from './FilterBox';
import Button from '../../Global/Button';
import Logo from '../../Global/Logo';




const MainFilterSection = ({sport,setSport,setIsSelected,isSelected,direction,setDirection}) => {

  

  function handlerClick(){
    {setIsSelected("true")}
  }

  return (
    <div className="wrapper--filter">

      <Logo />
      <FilterBox setSport={setSport} sport={sport}  name="site" text="Quelle épreuve allez vous voir?"/>
      {/* <FilterBox setDirection={setDirection} direction={direction} name="direction" text="Direction d'arrive"/> */}

      

      <button className="button--primary" onClick={handlerClick}>Valide</button>

    </div>
  );
}

export default MainFilterSection;