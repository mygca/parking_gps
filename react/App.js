//import React from 'react';
import FetchData from './components/FetchData';
import './App.scss';
import React, { useState } from "react";


import Sidebar from './components/Sidebar';
import Map from './components/Map';
import Home from './components/Home';

const App = () => {

  const [sport, setSport] = useState({value: "all", label: "Ton site"})
  //const [direction, setDirection] = useState({label: "hallu", value: "amanda"})
  const [isSelected, setIsSelected] = useState("false")
  const [isHome, setIsHome] = useState("true")
  
 
  return (
    <div>

      {(isHome==="false")?
        <div className="wrapper">
          <Sidebar setSport={setSport} sport={sport} setIsSelected={setIsSelected} isSelected={isSelected}/>
          <Map sport={sport}/>
        </div>
      :<Home isHome={isHome} setIsHome={setIsHome}/>
      }
    </div>
    
    

  );
}

export default App;