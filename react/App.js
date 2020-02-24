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
  const [sport, setSport] = useState({label: "Liste des sports", value: "all", lines:'r'})
  const [direction, setDirection] = useState({label: "List du direction", value: "center"})
  const [isSelected, setIsSelected] = useState("false")
  const [isHome, setIsHome] = useState("false")
  const [isPopUpNav, setPopUpNav] = useState("false")
  const [moodConnection, setMoodConnection] = useState("login")
  const [isLogin, setIsLogin] = useState(false)
  const [isSidebarFavoirit, setIsSidebarFavoirit] = useState(false)
  
 
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
          />

          {console.log("Direction "+direction.value)}

          <Map sport={sport} direction={direction}/>

          <Navigation 
          isHome={isHome} setIsHome={setIsHome} 
          isPopUpNav={isPopUpNav} setPopUpNav={setPopUpNav} 
          isLogin={isLogin} setIsLogin={setIsLogin} 
          setMoodConnection={setMoodConnection}
          isSidebarFavoirit={isSidebarFavoirit}
          setIsSidebarFavoirit={setIsSidebarFavoirit}/>

          {(isPopUpNav==="true")?
            <PopupConnection 
            isLogin={isLogin} setIsLogin={setIsLogin} 
            setPopUpNav={setPopUpNav} 
            moodConnection={moodConnection} setMoodConnection={setMoodConnection}  />
          :""}
        </div>
      :<Home isHome={isHome} setIsHome={setIsHome}/>
      }
    </div>
    
    

  );
}

export default App;