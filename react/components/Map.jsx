import React from 'react';
import Carte from './Map/Carte';
import Popup from './Map/Popup';

const Map = ({sport, site}) => {
  return (
    <div className="wrapper__map map">
      <p>{site}</p>
      <Carte site={site} />
      {console.log("mapsport", sport)}
      <Popup />
    </div>
  );
}

export default Map;