import React from 'react';
import Carte from './Map/Carte';
import Popup from './Map/Popup';

function Map({site,direction}) {
  return (
    <div className="wrapper__map map">
      <Carte site={site} direction={direction} />
      <Popup />
    </div>
  );
}

export default Map;