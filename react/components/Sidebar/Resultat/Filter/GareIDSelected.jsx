import React from 'react';
import ButtonCloseFilter from '../../../Global/ButtonCloseFilter';
import gareIdToGareName from '../../../../functions/map/gareIdToGareName';

const GareIDSelected = ({sport,lines,name, gares, gareID, setGareID, isGareIdSelected, setIsGareIdSelected}) => {

  return (
    <div className="box--gareSelected">
      <div className="box--gareSelected__name rerStationBox">
        <p>Zone du Parking</p>
        <div className="wrapper--flex wrapper--flex--start">
          <img alt="rer icon" className="rerStationBox__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/RER.svg/1200px-RER.svg.png" />
          {/* <p className="rerStationBox__name">Station RER</p> */}
          <p className="rerStationBox__name">{ gareIdToGareName(gareID, gares) }</p>
          {/* {console.log(gares)}
          {console.log(gareID)} */}
        </div>
        
      </div>
      <ButtonCloseFilter isGareIdSelected={isGareIdSelected} setIsGareIdSelected={setIsGareIdSelected} gareID={gareID} setGareID={setGareID}/>
    </div>
  )
}

export default GareIDSelected;