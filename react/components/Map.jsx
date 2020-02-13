import React from 'react';
import Carte from './Map/Carte';
import Popup from './Map/Popup';

const Map = ({sport}) => {
  return (
    <div className="wrapper__map map">
      <p>{sport}</p>
      <Carte sport={sport} />
      {console.log("mapsport", sport)}
      <Popup />
    </div>
  );
}

export default Map;