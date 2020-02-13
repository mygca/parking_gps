//import React from 'react';
import FetchData from './components/FetchData';
import './App.scss';
import React, { useState } from "react";
import Home from './components/Home';



import Sidebar from './components/Sidebar';
import Map from './components/Map';

import SiteContext from './contexts/SiteContext';
import DirectionContext from './contexts/DirectionContext';
//import GareIDContext from './contexts/GareIDContext';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Settings from './components/Settings';
import Application from './components/Application'






function App() {

  const [selectedSite, setSelectedSite] = useState("rien");
  const valueSite = { selectedSite, setSelectedSite };

  const [selectedDirection, setSelectedDirection] = useState("hallo");
  const valueDirection = { selectedDirection, setSelectedDirection };





  // const [selectedGareID, setSelectedGareID] = useState("null");
  // const valueGareID = { selectedGareID, setSelectedGareID };

 
  return (
    <Router>
    
      {/* <GareIDContext.Provider value={valueDirection}> */}
        <DirectionContext.Provider value={valueDirection}>
          <SiteContext.Provider value={valueSite}>

            <div className="stateGlobal">
              <p>{selectedDirection.value}</p>
              <p>{selectedSite.value}</p>
            </div>

            {/* <Sidebar />
            <Map site={selectedSite.value} direction={selectedDirection.value}/> */}

            <Switch site={selectedSite.value} direction={selectedDirection.value}>
              <Route path="/" component={Home} exact />
              <Route path="/settings" site={site} direction={direction} component={Settings} />
              <Route path="/application" site={site} direction={direction}component={Application} />
            </Switch>

          </SiteContext.Provider>
        </DirectionContext.Provider>
      {/* </GareIDContext.Provider> */}
   

        
    </Router>
  );
}

export default App;