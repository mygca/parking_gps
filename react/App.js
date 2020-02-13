//import React from 'react';
import FetchData from './components/FetchData';
import './App.scss';
import React, { useState } from "react";


import Sidebar from './components/Sidebar';
import Map from './components/Map';

import SiteContext from './contexts/SiteContext';
import DirectionContext from './contexts/DirectionContext';


function App() {

  const [selectedSite, setSelectedSite] = useState("rien");
  const valueSite = { selectedSite, setSelectedSite };

  const [selectedDirection, setSelectedDirection] = useState("hallo");
  const valueDirection = { selectedDirection, setSelectedDirection };

 
  return (
    <div className="wrapper">
      <DirectionContext.Provider value={valueDirection}>
        <SiteContext.Provider value={valueSite}>
          <div className="stateGlobal">
            <p>{selectedDirection.value}</p>
            <p>{selectedSite.value}</p>
          </div>

          <Sidebar />
          <Map site={selectedSite.value} direction={selectedDirection.value}/>
        </SiteContext.Provider>
      </DirectionContext.Provider>

        

    </div>
  );
}

export default App;