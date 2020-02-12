import React from 'react';
import FilterBox from './FilterBox';
import ParkingOutput from './ParkingOutput';

function MapOutput() {
  return (
    <div className="wrapper--output">
      <FilterBox />
      <ParkingOutput />
    </div>
  );
}

export default MapOutput;