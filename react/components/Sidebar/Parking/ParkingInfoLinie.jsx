import React from 'react';
const price= require('../../../img/infoLinie--price.png');
const height= require('../../../img/infoLinie--height.png');
const time= require('../../../img/infoLinie--time.png');
const station= require('../../../img/infoLinie--station.png');
const adresse= require('../../../img/infoLinie--station.png');
const opperator= require('../../../img/infoLinie--opperator.png');


function ParkingInfoLinie({name,legende,data}) {
  let imgPath={name}
  //console.log(eval(imgPath.name))

  return (
    <div className="parking__infoLine">
      <img src={eval(imgPath.name)} className="infoLine__image" alt=""/>
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