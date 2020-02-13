import React from 'react';
import Carte from './Map/Carte';
import Popup from './Map/Popup';

function MapPreview({site,direction}) {
  return (
    <div className="wrapper__map map">
      <Carte site={site} direction={direction} />
      <Popup />
    </div>
  );
}

export default MapPreview;