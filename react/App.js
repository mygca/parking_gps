//import React from 'react';
import FetchData from './components/FetchData';
import './App.scss';
import React, { useState } from "react";


import Sidebar from './components/Sidebar';
import Map from './components/Map';

const App = () => {

  const [sport, setSport] = useState({label: "hallu", value: "amanda"})
  //const [direction, setDirection] = useState({label: "hallu", value: "amanda"})

 
  return (
    <div className="wrapper">
      <div className="stateGlobal">
      <p>{sport.label}</p>
      </div>
      
      <Sidebar setSport={setSport} sport={sport}/>
      <Map sport={sport.label}/>
    </div>
    

  );
}

export default App;