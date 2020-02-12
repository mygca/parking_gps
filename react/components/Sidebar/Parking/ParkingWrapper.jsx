import React from 'react';
import ParkingBox from './ParkingBox';

function ParkingPreviewWrapper() {
  return (
    <div className="wrapper--parking">
      <ParkingBox opened="true"/>
      <ParkingBox opened="false" />
      <ParkingBox opened="false"/>
    </div>
  );
}

export default ParkingPreviewWrapper;