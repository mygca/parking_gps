import React, { useState } from 'react';
import MainFilterSection from './Sidebar/Filter/MainFilterSection';
import MapOutput from './Sidebar/Resultat/MapOutput';

const Sidebar = ({sport,setSport,setIsSelected,isSelected, lines,isSidebarFavoirit,setIsSidebarFavoirit,setDirection,direction,listFavorit,setListFavorit}) => {

  

  return (
    <div className="wrapper__sidebar sidebar">


    {window.innerWidth<760 === true?
      <div>
        <p>Favorit</p>
        <MapOutput sport={sport.value} lines={lines} isSidebarFavoirit={isSidebarFavoirit}/>  
      </div>
    :
    
      isSelected === "false"?
      <div>
        <MainFilterSection 
        sport={sport} setSport={setSport} 
        setIsSelected={setIsSelected} isSelected={isSelected}
        setIsSidebarFavoirit={setIsSidebarFavoirit}
        direction={direction} setDirection={setDirection}
        />
        
      </div>
      
    :
        
      isSidebarFavoirit === false?
        <div>
          <MapOutput 
          sport={sport.value} 
          direction={direction} 
          lines={lines} 
          isSidebarFavoirit={isSidebarFavoirit}
          listFavorit={listFavorit} 
          setListFavorit={setListFavorit}
          />  
          {console.log("Direction sidebar "+direction)}
        </div>
      :
        <div>
          <p>Favorit</p>
          <MapOutput sport={sport.value} lines={lines} isSidebarFavoirit={isSidebarFavoirit}/>  
        </div>
      
    
    }


    

    
  
    </div>
  );
}

export default Sidebar;