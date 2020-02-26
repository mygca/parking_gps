import React, { useState } from 'react';
import Select from 'react-select';
import {dataSites} from '../../../data/sites';
import {dataDirection} from '../../../data/direction';


import{centerMap} from '../../../functions/map/centerMap.js';
import{getStadion} from '../../../functions/map/getStadion.js';
import{getGareId} from '../../../functions/map/getGareId.js';

//import {STATIONS} from '../../data/stations.js'

const FilterBox = ({ setSport, text,name, sport,direction,setDirection}) => {


  return (

    <div className="box--filter filterBox">
    <h2 className="filterBox__headline">{text}</h2>

    {name==="site"?
      <Select
        value={sport}
        onChange={(e) => {setSport({label: e.label, value: e.value, lines: e.lines});getStadion(e.value)}}
        options={dataSites}
      />
    :
    <Select
      value={direction}
      onChange={(e) => {setDirection({label: e.label, value: e.value});}}
      options={dataDirection}
    />  
    }
 

      
    </div>
  );
};

export default FilterBox;