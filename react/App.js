//import React from 'react';
import FetchData from './components/FetchData';
import './App.scss';
import React, { useState } from "react";


import Sidebar from './components/Sidebar';
import Map from './components/Map';

const App = () => {

  const [sport, setSport] = useState()
  const [direction, setDirection] = useState()

 
  return (
    <div className="wrapper">
      <div className="stateGlobal">
        {/* <p>{sport.value}</p>
        <p>{direction.value}</p> */}
      </div>
      <p></p>
      <Sidebar setSport={setSport} setDirection={setDirection} direction={direction} sport={sport}/>
      <Map sport={sport} direction={direction}/>
    </div>
    

  );
}

export default App;