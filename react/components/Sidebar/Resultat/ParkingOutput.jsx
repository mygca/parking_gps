import React, { useState } from 'react';
import ParkingWrapper from '../Parking/ParkingWrapper';

function ParkingOutput({gareID, setIs24,setIsHandicap,setIsSecurity,is24,isHandicap,isSecurity,minHeight,setMinHeight, sport, lines,direction,listFavorit, setListFavorit, isPrixUp, setIsPrixUp, setPopUpNav, setMoodConnection, setIsFirstFav}) 
{
  const [parkingsCount, setParkingsCount]= useState('a number')

  const getParkingCount = (dataChild) => 
  {
    setParkingsCount(dataChild)
  }

  return (
    <div className="wrapper--parkingOutput">
      <h3 className="headline--parkingOutput">TOUS LES PARKINGS<span>-{parkingsCount} résultats</span></h3>

      {/* <hr></hr> */}
      <ParkingWrapper gareID={gareID} setIs24={setIs24} is24={is24}
        setIsHandicap={setIsHandicap} isHandicap={isHandicap}
        setIsSecurity={setIsSecurity} isSecurity={isSecurity}
        setMinHeight={setMinHeight} minHeight={minHeight} sport={sport} direction={direction} lines={lines} 
        listFavorit={listFavorit} setListFavorit={setListFavorit}
        isPrixUp={isPrixUp} setIsPrixUp={setIsPrixUp}
        setIsFirstFav={setIsFirstFav}
        setPopUpNav={setPopUpNav} 
        setMoodConnection={setMoodConnection}
        parentCallback={getParkingCount}
      />
    </div>
  );
}

export default ParkingOutput;