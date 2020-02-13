import React from 'react';
import MainFilterSection from './Sidebar/Filter/MainFilterSection';
import MapOutput from './Sidebar/Resultat/MapOutput';

const Sidebar = ({sport,setSport}) => {
  return (
    <div className="wrapper__sidebar sidebar">
      {/* <MainFilterSection sport={sport} setSport={setSport} /> */}
      <MapOutput />
    </div>
  );
}

export default Sidebar;