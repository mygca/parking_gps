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
  const [direction, setDirection] = useState({label: "List du direction", value: "center"})
  // button validation (sport,direction)
  const [isSelected, setIsSelected] = useState("false")
  // is homepage ou app
  const [isHome, setIsHome] = useState("false")
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

  return (
    <div>

      {(isHome==="false")?
        <div className="wrapper">
          {/* <div className="stateGlobal">
            <p>{sport.label}</p>
            <p>{sport.lines}</p>
            <p>{isSelected}</p>
          </div> */}

          <Sidebar 
          setSport={setSport} sport={sport} 
          lines={sport.lines} 
          setIsSelected={setIsSelected} isSelected={isSelected}
          isSidebarFavoirit={isSidebarFavoirit}
          setIsSidebarFavoirit={setIsSidebarFavoirit}
          direction={direction} setDirection={setDirection}
          listFavorit={listFavorit} setListFavorit={setListFavorit}
          />

          {console.log("Direction "+direction.value)}

          {window.innerWidth<760 === true?
            ""
          :
            <Map sport={sport} direction={direction}/>
          }

          <Navigation 
          isHome={isHome} setIsHome={setIsHome} 
          isPopUpNav={isPopUpNav} setPopUpNav={setPopUpNav} 
          isLogin={isLogin} setIsLogin={setIsLogin} 
          setMoodConnection={setMoodConnection}
          isSidebarFavoirit={isSidebarFavoirit}
          setIsSidebarFavoirit={setIsSidebarFavoirit}
          listFavorit={listFavorit}/>

          {(isPopUpNav==="true")?
            <PopupConnection 
            isLogin={isLogin} setIsLogin={setIsLogin} 
            setPopUpNav={setPopUpNav} 
            moodConnection={moodConnection} setMoodConnection={setMoodConnection}  />
          :""}
        </div>
      :<Home 
      isHome={isHome} setIsHome={setIsHome} 
      isMobil={isMobil}
      isSidebarFavoirit={isSidebarFavoirit}
      setIsSidebarFavoirit={setIsSidebarFavoirit}
      listFavorit={listFavorit}
      />
      }
    </div>
    
    

  );
}

export default App;