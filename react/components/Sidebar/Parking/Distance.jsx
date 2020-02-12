import React from 'react';

import Icon from './Icon'

// if valeur true -> .parkingOption (opacity: 1)

function Distance({name,value}) {
  return (
    // <div className="parking__distance"> 
    //   <Icon name="parking"/>
    //   <p>50m</p>
    //   <Icon name="train"/>
    //   <p>30km</p>
    //   <Icon name="jo"/>
    // </div>

    <div className="parking__distance">
      <div class="distanceBox distance">
        <p class="distance__legende">{name}</p>
        <p class="distance__distance">{value}</p>
      </div>
    </div>
  );
}

export default Distance;