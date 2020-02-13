import React from 'react';
import MainFilterSection from './Sidebar/Filter/MainFilterSection';
import MapOutput from './Sidebar/Resultat/MapOutput';

const Sidebar = ({sport,direction,setDirection,setSport}) => {
  return (
    <div className="wrapper__sidebar sidebar">
      <MainFilterSection sport={sport} setSport={setSport} setDirection={setDirection} direction={direction}/>
      {/* <MapOutput /> */}
    </div>
  );
}

export default Sidebar;