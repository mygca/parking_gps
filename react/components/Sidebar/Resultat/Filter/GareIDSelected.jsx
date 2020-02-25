import React from 'react';
import ButtonCloseFilter from '../../../Global/ButtonCloseFilter';

function GareIDSelected({sport,lines,name}) {

  return (
    <div className="box--gareSelected">
      <p>aka</p>
      <div className="parkingPreview__rerStationBox rerStationBox">
        <img alt="rer icon" className="rerStationBox__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/RER.svg/1200px-RER.svg.png" />
        <p className="rerStationBox__name">Station RER</p>

      </div>
      <ButtonCloseFilter/>
    </div>
  )
}

export default GareIDSelected;