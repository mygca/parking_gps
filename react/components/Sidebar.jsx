import React, { useState } from 'react';
import MainFilterSection from './Sidebar/Filter/MainFilterSection';
import MapOutput from './Sidebar/Resultat/MapOutput';
import Registre from './Global/Registre';
import Popup from './Map/Popup';

const Sidebar = ({sport,setSport,setIsSelected,isSelected, lines,isSidebarFavoirit,setIsSidebarFavoirit,setDirection,direction,listFavorit,setListFavorit,isPopUpNav,setPopUpNav,setMoodConnection,isLogin,setIsFirstFav}) => {

  return (
    <div className="wrapper__sidebar sidebar">

      


    {window.innerWidth<760 === true?
      <div>
        <p>Favorit</p>
        <MapOutput sport={sport.value} lines={lines} isSidebarFavoirit={isSidebarFavoirit}
        />  
      </div>
    :
      isSelected === "false"?
        <div>
          <MainFilterSection 
          sport={sport} setSport={setSport} 
          setIsSelected={setIsSelected} isSelected={isSelected}
          setIsSidebarFavoirit={setIsSidebarFavoirit}
          direction={direction} setDirection={setDirection}
          isPopUpNav={isPopUpNav} setPopUpNav={setPopUpNav} 
          />

            {console.log("Sport sidebar "+sport.value)}
            {/* Small pupups at the carte to give more information en plus */}

            {console.log("sidebar fav "+isSidebarFavoirit)}
            {console.log("selected "+isSelected)}

            {sport.value !== "all"?
              <Popup name="popupLinie" isSelected={isSelected} sport={sport.value} lines={lines}/>
            :""}
            {sport.value !== "all"?
              <Popup name="popupState" isSelected={isSelected} sport={sport.value} lines={lines}/>
            :""}
          
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
            setIsSelected={setIsSelected}
            setIsFirstFav={setIsFirstFav}
            setPopUpNav={setPopUpNav} 
            setMoodConnection={setMoodConnection}
            />  


              <Popup name="popupLinie" sport={sport.value} lines={lines}/>
     
              <Popup name="popupState" sport={sport.value} lines={lines}/>
 
            
          </div>
          :
          <div>
            <p>Favorit</p>
            <p></p>
            <MapOutput 
            sport={sport.value} 
            lines={lines} 
            isSidebarFavoirit={isSidebarFavoirit}
            isPopUpNav={isPopUpNav} setPopUpNav={setPopUpNav} 
            setMoodConnection={setMoodConnection}/>  
          </div>
      }
    
  
    </div>
  );
}

export default Sidebar;