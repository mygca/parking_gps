import React from 'react';
import Carte from './Map/Carte';
import Popup from './Map/Popup';

const Map = ({sport}) => {
  return (
    <div className="wrapper__map map">
      <Carte sport={sport.value} />
      <Popup />
    </div>
  );
}

export default Map;