import React from 'react';
import RerArrete from './RerArrete'
import Favorit from './Favorit'
import ParkingOptions from './ParkingOptions'
import Distance from './Distance'
import Price from './Price'
import ButtonSeeMore from './ButtonSeeMoor'
import ParkingOpend from './ParkingOpend'

function Parking({opened}) {
  return (
    <div className="box--parking parking">

      <div className="wrapper--flex">
        <div>
          <h3>Parking-Vincennes Chateau</h3>
          <RerArrete name="Vincennes"/>
        </div>
        <div className="wrapper--flex">
          <Favorit />
          <ButtonSeeMore />
        </div>
      </div>

      <div className="wrapper--flex">
        <div className="parking__options">
          <ParkingOptions name="24"/>
          <ParkingOptions name="handicape"/>
          <ParkingOptions name="securite"/>
        </div>
        {opened==="false"?
          <Price />
        :""}
      </div>

      <div className="parking__distance">
        <Distance name="En Pied" value="50m - 3min"/>
        <Distance name="En Train" value="20km - 20min"/>
      </div>

      {opened==="true"?
        <ParkingOpend />
      :""}

    </div>
  );
}

export default Parking;