import React from 'react';
import ParkingInfoLinie from './ParkingInfoLinie';
const cartePlaceholder = require('../../../img/carte.png')


function ParkingOpend({data}) {
  return (
    <div className="parking--opened">
      <img className="parking__map" src={cartePlaceholder} alt=""/>
      {/* <ParkingInfoLinie name="station" legende="Station RER" value="Vincennes" /> */}
      <ParkingInfoLinie name="station" legende="Station RER" data={data.gares_id} />
      {/* <ParkingInfoLinie name="adresse" legende="Adresse du Parking" value="4,Rue de la Bienfaisance" /> */}
      {/* <ParkingInfoLinie name="adresse" legende="Adresse du Parking" data={`${data.Address} ${data.Zipcode} ${data.City}`} /> */}
      <ParkingInfoLinie name="adresse" legende="Adresse du Parking" data={`${data.adresse} ${data.code_postal} ${data.ville}`} />
      {/* <ParkingInfoLinie name="opperator" legende="Opperateur" value="Q-PARK" /> */}
      {/* <ParkingInfoLinie name="opperator" legende="Opperateur" data={data.Company} /> */}
      <ParkingInfoLinie name="opperator" legende="Opperateur" data={data.company} />
      {/* <ParkingInfoLinie name="time" legende="Ouvertures" value="10:00 - 29:00" /> */}
      {/* <ParkingInfoLinie name="time" legende="Ouvertures" data={ data.time_opening==null ? "nc" : data.time_opening } /> */}
      <ParkingInfoLinie name="time" legende="Ouvertures" data={ data.time_opening==0 ? "24H/24H" : data.time_opening } />
      <div className="wrapper--flex wrapper--prix">
        {/* <ParkingInfoLinie name="price" legende="Jour" value="10€" /> */}
        {/* <ParkingInfoLinie name="price" legende="Jour" data={data.prix_jour=='' || data.prix_jour=="Pas d'information" ? `${data.prix_jour}€` : "Pas d'information"} /> */}
        <ParkingInfoLinie name="price" legende="Jour" data={data.prix_jour=='' || data.prix_jour=="Pas d'information" ? "Gratuit" : "Pas d'information"} />
        {/* <ParkingInfoLinie name="price" legende="Semaine" value="30€" /> */}
        <ParkingInfoLinie name="price" legende="Semaine" data={data.prix_semaine=='' || data.prix_semaine=="Pas d'information" ? "Gratuit" : "Pas d'information"}  />
      </div>
    </div>
  );
}

export default ParkingOpend;