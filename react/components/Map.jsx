import React from 'react';
import Carte from './Map/Carte';


const Map = ({sport}) => {
  return (
    <div className="wrapper__map map">
      
      <Carte sport={sport.value} />
      
    </div>
  );
}

export default Map;