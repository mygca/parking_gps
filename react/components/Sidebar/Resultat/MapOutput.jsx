import React, { useState, useEffect } from 'react';
import FilterBox from './FilterBox';
import ParkingOutput from './ParkingOutput';

import getGareId from '../../../functions/map/getGareId';

// import {STATIONS} from '../../../data/stations'

function MapOutput() {

  const [is24, setIs24] = useState(false)
  const [isHandicap, setIsHandicap] = useState(false)
  const [isSecurity, setIsSecurity] = useState(false)
  const [minHeight, setMinHeight] = useState("1.9")

  const [gareID, setGareID] = useState()

  useEffect(() => {
    getGareId(setGareID)
  },[]);
 
  return (
    <div className="wrapper--output">
      
      <FilterBox 
        setIs24={setIs24} is24={is24}
        setIsHandicap={setIsHandicap} isHandicap={isHandicap}
        setIsSecurity={setIsSecurity} isSecurity={isSecurity}
        setMinHeight={setMinHeight} minHeight={minHeight}
      />
      <p>{gareID}</p>
      <ParkingOutput gareID={gareID} setIs24={setIs24} is24={is24}
        setIsHandicap={setIsHandicap} isHandicap={isHandicap}
        setIsSecurity={setIsSecurity} isSecurity={isSecurity}
        setMinHeight={setMinHeight} minHeight={minHeight}/>

 
    </div>
  );
}

export default MapOutput;