import React, {useEffect } from 'react';
import getCircelInformations from '../../../functions/getCircelInformations';


function RerArrete({name,dataGares}) {

  useEffect(() => {
    getCircelInformations({dataGares})
  }, [])
  return (
    <div className="parkingPreview__rerStationBox rerStationBox">
      <img alt="rer icon" className="rerStationBox__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/RER.svg/1200px-RER.svg.png" />
      <p className="rerStationBox__name">{name}</p>
    </div>
  );
}

export default RerArrete;