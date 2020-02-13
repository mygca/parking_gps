import React from 'react';


function ParkingInfoLinie({name,legende,data}) {
  return (
    <div className="parking__infoLine">
      <img src={"./build/images/infoLinie--"+name+".png"} className="infoLine__image" alt=""/>
      <div>
        <p className="infoLine__legende">{legende}</p>
        <p className="infoLine__value">{data}</p>
      </div>
      {name==="opperator"?
        <button className="button--contact">Contacter</button>
      :""}
    </div>
  );
}

export default ParkingInfoLinie;