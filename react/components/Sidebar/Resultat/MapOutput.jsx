import React, { useState } from "react";
import FilterBox from './FilterBox';
import ParkingOutput from './ParkingOutput';

function MapOutput() {

  const [is24, setIs24] = useState(false)
  const [isHandicap, setIsHandicap] = useState(false)
  const [isSecurity, setIsSecurity] = useState(false)
  const [minHeight, setMinHeight] = useState("1.9")


  return (
    <div className="wrapper--output">
      <p>{is24}</p>
      <FilterBox 
        setIs24={setIs24} is24={is24}
        setIsHandicap={setIsHandicap} isHandicap={isHandicap}
        setIsSecurity={setIsSecurity} isSecurity={isSecurity}
        setMinHeight={setMinHeight} minHeight={minHeight}
      />
      <ParkingOutput />
    </div>
  );
}

export default MapOutput;