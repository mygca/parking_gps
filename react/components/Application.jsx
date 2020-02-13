import React from 'react';
import SidebarParking from './SidebarParking'
import Map from './Map'

function Application({site,direction}) {
  return (
    <div className="wrapper">
      <SidebarParking />
      <Map site={site} direction={direction} />
    </div>
  );
}

export default Application;