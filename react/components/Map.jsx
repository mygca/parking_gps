import React from 'react';
import Carte from './Map/Carte';
import Popup from './Map/Popup';

function Map() {
  return (
    <div className="wrapper__map map">
      <Carte />
      <Popup />
    </div>
  );
}

export default Map;