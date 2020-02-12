import React from 'react';
import FilterBoxAffichage from './FilterBoxAffichage';
import ParkingWrapper from '../Parking/ParkingWrapper';

function ParkingOutput() {
  return (
    <div className="wrapper--parkingOutput">
      <h2>Tout des Parkings</h2>
      <FilterBoxAffichage />
      <hr></hr>
      <ParkingWrapper/>
    </div>
  );
}

export default ParkingOutput;