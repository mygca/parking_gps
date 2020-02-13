import React, { useState } from 'react';
import Select from 'react-select';
import {dataSites} from '../../../data/sites';
import {dataDirection} from '../../../data/direction';

import{centerMap} from '../../../functions/map/centerMap.js';
import{getGareId} from '../../../functions/map/getGareId.js';

//import {STATIONS} from '../../data/stations.js'

const FilterBox = ({ setSport, setDirection, text,name, sport,direction}) => {

  return (
    <div className="box--filter filterBox">
    <h2 className="filterBox__headline">{text}</h2>

    {name==="site"?
      <Select
        value={sport}
        onChange={(e) => {setSport({label: e.value, value: e.value})}}
        options={dataSites}
      />
    :
    <Select
      value={direction}
      onChange={(e) => {setDirection({label: e.value, value: e.value})}}
      options={dataDirection}
    />  
    }
 

      
    </div>
  );
};

export default FilterBox;