import React from 'react';


// if valeur true -> .parkingOption (opacity: 1)

function ParkingOptions({name}) {
  return (
    <div className={"parkingOption parkingOption--"+name}></div>
  );
}

export default ParkingOptions;