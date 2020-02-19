//import React from 'react';
import FetchData from './components/FetchData';
import './app.scss';
import React, { useState } from "react";


import Sidebar from './components/Sidebar';
import Map from './components/Map';
import Home from './components/Home';

const App = () => {

  // const [sport, setSport] = useState({label: "hallu", value: "amanda"})
  const [sport, setSport] = useState({label: "Liste des sports", value: "all", lines:'r'})
  //const [direction, setDirection] = useState({label: "hallu", value: "amanda"})
  const [isSelected, setIsSelected] = useState("false")
  const [isHome, setIsHome] = useState("true")
  
 
  return (
    <div>

      {(isHome==="false")?
        <div className="wrapper">
          <div className="stateGlobal">
            <p>{sport.label}</p>
            <p>{sport.lines}</p>
            <p>{isSelected}</p>
          </div>
          <Sidebar setSport={setSport} sport={sport} lines={sport.lines} setIsSelected={setIsSelected} isSelected={isSelected}/>
          <Map sport={sport}/>
        </div>
      :<Home isHome={isHome} setIsHome={setIsHome}/>
      }
    </div>
    
    

  );
}

export default App;