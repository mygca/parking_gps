import React from 'react';
import FetchData from './components/FetchData';
import './App.scss';


import Sidebar from './components/Sidebar';
import Map from './components/Map';


function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <Map />
    </div>
  );
}

export default App;