import React, { useState, useEffect } from 'react';
import FilterBox from './FilterBox';
import ParkingOutput from './ParkingOutput';

import getGareId from '../../../functions/map/getGareId';

// import {STATIONS} from '../../../data/stations'

function MapOutput({sport}) {

  const [is24, setIs24] = useState(false)
  const [isHandicap, setIsHandicap] = useState(false)
  const [isSecurity, setIsSecurity] = useState(false)
  const [minHeight, setMinHeight] = useState("1.9")

  const [gareID, setGareID] = useState()

  useEffect(() => {
    getGareId(setGareID,sport)
  },[]);
 
  return (
    <div className="wrapper--output">

      <p>{sport}</p>
      
      <FilterBox 
        setIs24={setIs24} is24={is24}
        setIsHandicap={setIsHandicap} isHandicap={isHandicap}
        setIsSecurity={setIsSecurity} isSecurity={isSecurity}
        setMinHeight={setMinHeight} minHeight={minHeight}
      />
      <p>{gareID}</p>
      <ParkingOutput />

 
    </div>
  );
}

export default MapOutput;