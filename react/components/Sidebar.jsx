import React, { useState } from 'react';
import MainFilterSection from './Sidebar/Filter/MainFilterSection';
import MapOutput from './Sidebar/Resultat/MapOutput';

const Sidebar = ({sport,setSport,setIsSelected,isSelected, lines}) => {

  

  return (
    <div className="wrapper__sidebar sidebar">

      {isSelected === "false"?
        <MainFilterSection sport={sport} setSport={setSport} setIsSelected={setIsSelected}  isSelected={isSelected}/>
      :<MapOutput sport={sport.value} lines={lines}/> 
      }

      
    </div>
  );
}

export default Sidebar;