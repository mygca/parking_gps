import React from 'react';


function ParkingInfoLinie({name,legende,value}) {
  return (
    <div className="parking__infoLine">
      <img src={"./img/infoLinie--"+name+".png"} className="infoLine__image" alt=""/>
      <div>
        <p className="infoLine__legende">{legende}</p>
        <p className="infoLine__value">{value}</p>
      </div>
      {name==="opperator"?
        <button className="button--contact">Contacter</button>
      :""}
    </div>
  );
}

export default ParkingInfoLinie;