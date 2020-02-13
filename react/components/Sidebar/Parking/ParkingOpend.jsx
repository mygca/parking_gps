import React from 'react';
import ParkingInfoLinie from './ParkingInfoLinie';
const cartePlaceholder = require('../../../img/carte.png')


function ParkingOpend({data}) {
  return (
    <div className="parking--opened">
      <img className="parking__map" src={cartePlaceholder} alt=""/>
      <ParkingInfoLinie name="station" legende="Station RER" value="Vincennes" />
      {/* <ParkingInfoLinie name="adresse" legende="Adresse du Parking" value="4,Rue de la Bienfaisance" /> */}
      <ParkingInfoLinie name="adresse" legende="Adresse du Parking" data={`${data.Address} ${data.Zipcode} ${data.City}`} />
      {/* <ParkingInfoLinie name="opperator" legende="Opperateur" value="Q-PARK" /> */}
      <ParkingInfoLinie name="opperator" legende="Opperateur" data={data.Company} />
      {/* <ParkingInfoLinie name="time" legende="Ouvertures" value="10:00 - 29:00" /> */}
      <ParkingInfoLinie name="time" legende="Ouvertures" data={ data.OpenTime==null ? "nc" : data.OpenTime } />
      <div className="wrapper--flex wrapper--prix">
        {/* <ParkingInfoLinie name="price" legende="Jour" value="10€" /> */}
        <ParkingInfoLinie name="price" legende="Jour" data={data.PriceDay=='' || data.PriceDay=="Pas d'information" ? `${data.PriceDay}€` : "Pas d'information"} />
        {/* <ParkingInfoLinie name="price" legende="Semaine" value="30€" /> */}
        <ParkingInfoLinie name="price" legende="Semaine" data={data.PriceWeek=='' || data.PriceWeek=="Pas d'information" ? `${data.PriceWeek}€` : "Pas d'information"}  />
      </div>
    </div>
  );
}

export default ParkingOpend;