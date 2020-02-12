import React from 'react';
import ParkingInfoLinie from './ParkingInfoLinie';
const cartePlaceholder = require('../../../img/carte.png')


function ParkingOpend() {
  return (
    <div className="parking--opened">
      <img className="parking__map" src={cartePlaceholder} alt=""/>
      <ParkingInfoLinie name="station" legende="Station RER" value="Vincennes" />
      <ParkingInfoLinie name="adresse" legende="Adresse du Parking" value="4,Rue de la Bienfaisance" />
      <ParkingInfoLinie name="opperator" legende="Opperateur" value="Q-PARK" />
      <ParkingInfoLinie name="time" legende="Ouvertures" value="10:00 - 29:00" />
      <div className="wrapper--flex wrapper--prix">
        <ParkingInfoLinie name="price" legende="Jour" value="10€" />
        <ParkingInfoLinie name="price" legende="Semaine" value="30€" />
      </div>
    </div>
  );
}

export default ParkingOpend;