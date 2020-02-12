import React from 'react';
import MainFilterSection from './Sidebar/Filter/MainFilterSection';
import MapOutput from './Sidebar/Resultat/MapOutput';

function Sidebar() {
  return (
    <div className="wrapper__sidebar sidebar">
      <MainFilterSection />
      {/* <MapOutput /> */}
    </div>
  );
}

export default Sidebar;