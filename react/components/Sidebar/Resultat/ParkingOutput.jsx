import React from 'react';
import ParkingWrapper from '../Parking/ParkingWrapper';

function ParkingOutput({gareID, setIs24,setIsHandicap,setIsSecurity,is24,isHandicap,isSecurity,minHeight,setMinHeight, sport, lines,direction,listFavorit, setListFavorit,setIsFirstFav, isPrixUp, setIsPrixUp,setPopUpNav,setMoodConnection,isLogin}) {
  return (
    <div className="wrapper--parkingOutput">
      { gareID!==null || gareID!==undefined?
      <div>
        <h3 className="headline--parkingOutput">TOUS LES PARKINGS<span >-<span className="headline--parkingOutput__number">..</span> résultats</span></h3>
      </div>
      :""
      }
      {/* <hr></hr> */}
      <ParkingWrapper gareID={gareID} setIs24={setIs24} is24={is24}
        setIsHandicap={setIsHandicap} isHandicap={isHandicap}
        setIsSecurity={setIsSecurity} isSecurity={isSecurity}
        setMinHeight={setMinHeight} minHeight={minHeight} sport={sport} direction={direction} lines={lines} 
        listFavorit={listFavorit} setListFavorit={setListFavorit}
        isPrixUp={isPrixUp} setIsPrixUp={setIsPrixUp}
        setIsFirstFav={setIsFirstFav}
        isLogin={isLogin}
        setPopUpNav={setPopUpNav} 
        setMoodConnection={setMoodConnection}
      />
    </div>
  );
}

export default ParkingOutput;