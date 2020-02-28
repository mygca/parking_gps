//import React from 'react';
import FetchData from './components/FetchData';
import './app.scss';
import React, { useState } from "react";


import Sidebar from './components/Sidebar';
import Map from './components/Map';
import Home from './components/Home';
import Navigation from './components/Global/Navigation';
import PopupConnection from './components/Global/PopupConnection';

const App = () => {

  // const [sport, setSport] = useState({label: "hallu", value: "amanda"})

  //selected sport
  const [sport, setSport] = useState({label: "Liste des sports", value: "all", lines:'r'})
  //selected Direction
  const [direction, setDirection] = useState({label: "Directions d'arrivée", value: "center"})
  // button validation (sport,direction)
  const [isSelected, setIsSelected] = useState("false")
  // is homepage ou app
  const [isHome, setIsHome] = useState("true")
  //is popup open 
  const [isPopUpNav, setPopUpNav] = useState("false")
  // login,connection, profil
  const [moodConnection, setMoodConnection] = useState("login")
  //is connected
  const [isLogin, setIsLogin] = useState(false)
  // sidebar mood favorit
  const [isSidebarFavoirit, setIsSidebarFavoirit] = useState(false)
  // favorit list
  const [listFavorit, setListFavorit] = useState([])
  // is mobil
  const [isMobil,setIsMobil ] = useState(false)
  // is first time Favorit
  const [isFirstFav,setIsFirstFav ] = useState(false)
  // is a gare id selected
  // const [isGareIdSelected, setIsGareIdSelected] = useState(false)

  

  return (
    <div>

      {console.log("isPopUpNav",isPopUpNav)}

      {(isHome==="false")?
        <div className="wrapper">
 
          <Sidebar 
          setSport={setSport} sport={sport} 
          lines={sport.lines} 
          setIsSelected={setIsSelected} isSelected={isSelected}
          isSidebarFavoirit={isSidebarFavoirit}
          setIsSidebarFavoirit={setIsSidebarFavoirit}
          direction={direction} setDirection={setDirection}
          listFavorit={listFavorit} setListFavorit={setListFavorit}
          isPopUpNav={isPopUpNav} setPopUpNav={setPopUpNav} 
          setMoodConnection={setMoodConnection}
          isLogin={isLogin}
          setIsFirstFav={setIsFirstFav}
          />

          {console.log("Direction "+direction.value)}
          {console.log("fav list app ",listFavorit)}
          {console.log("first fav"+isFirstFav)}

          {window.innerWidth<760 === true?
            ""
          :
            <Map sport={sport} direction={direction} isSelected={isSelected}/>
          }


          {window.innerWidth>760 === true?
            <Navigation 
            isHome={isHome} setIsHome={setIsHome} 
            isPopUpNav={isPopUpNav} setPopUpNav={setPopUpNav} 
            isLogin={isLogin} setIsLogin={setIsLogin} 
            setMoodConnection={setMoodConnection}
            isSidebarFavoirit={isSidebarFavoirit}
            setIsSidebarFavoirit={setIsSidebarFavoirit}
            listFavorit={listFavorit}
            isSelected={isSelected}
            />
          :""}

          
        </div>
      :<Home 
      isHome={isHome} setIsHome={setIsHome} 
      isMobil={isMobil}
      isLogin={isLogin} setIsLogin={setIsLogin}
      isSidebarFavoirit={isSidebarFavoirit}
      setIsSidebarFavoirit={setIsSidebarFavoirit}
      listFavorit={listFavorit}
      isPopUpNav={isPopUpNav} setPopUpNav={setPopUpNav} 
      setMoodConnection={setMoodConnection}
      />
      }

      {(isPopUpNav==="true" && isLogin===false)?
        <PopupConnection 
        isLogin={isLogin} setIsLogin={setIsLogin} 
        isHome={isHome} setIsHome={setIsHome} 
        setPopUpNav={setPopUpNav} 
        isFirstFav={isFirstFav}
        setIsSidebarFavoirit={setIsSidebarFavoirit}
        moodConnection={moodConnection} setMoodConnection={setMoodConnection}  />
      :""}
    </div>
    
    

  );
}

export default App;