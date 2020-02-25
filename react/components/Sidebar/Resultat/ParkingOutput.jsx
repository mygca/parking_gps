import React from 'react';
import FilterBoxAffichage from './FilterBoxAffichage';
import ParkingWrapper from '../Parking/ParkingWrapper';

function ParkingOutput({gareID, setIs24,setIsHandicap,setIsSecurity,is24,isHandicap,isSecurity,minHeight,setMinHeight, sport, lines,direction,listFavorit, setListFavorit}) {
  return (
    <div className="wrapper--parkingOutput">
      <h2>Tous les parkings</h2>
      <FilterBoxAffichage />
      <hr></hr>
      <ParkingWrapper gareID={gareID} setIs24={setIs24} is24={is24}
        setIsHandicap={setIsHandicap} isHandicap={isHandicap}
        setIsSecurity={setIsSecurity} isSecurity={isSecurity}
        setMinHeight={setMinHeight} minHeight={minHeight} sport={sport} direction={direction} lines={lines} 
        listFavorit={listFavorit} setListFavorit={setListFavorit}/>
    </div>
  );
}

export default ParkingOutput;