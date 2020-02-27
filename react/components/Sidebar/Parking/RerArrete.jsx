import React, {useEffect } from 'react';
import getCircelInformations from '../../../functions/getCircelInformations';
const rerIcon = require ('../../../img/iocn--rer.png');


function RerArrete({name,dataGares}) {
//console.log('in rer arret')
  useEffect(() => {
    getCircelInformations({dataGares})
  }, [])
  return (
    <div className="parkingPreview__rerStationBox rerStationBox">
      {/* <img alt="rer icon" className="rerStationBox__icon" src={rerIcon} /> */}
      <p className="rerStationBox__name">{name}</p>
      {/* {console.log(name)} */}
    </div>
  );
}

export default RerArrete;