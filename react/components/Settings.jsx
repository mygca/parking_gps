import React from 'react';
import Map from './Map';
import SidebarSetting from './SidebarSetting';

function Settings({site,direction}) {
  return (
    <div className="wrapper">
      <SidebarSetting />
      <Map site={site} direction={direction} />
    </div>
  );
}

export default Settings;