import React, { useContext } from 'react';
import Select from 'react-select';
import {dataSites} from '../../../data/sites';
import {dataDirection} from '../../../data/direction';

import SiteContext from '../../../contexts/SiteContext'
import DirectionContext from '../../../contexts/DirectionContext'

import{centerMap} from '../../../functions/map/centerMap.js';
import{getGareId} from '../../../functions/map/getGareId.js';

//import {STATIONS} from '../../data/stations.js'

const FilterBox = ({text,name}) => {
  const { selectedSite, setSelectedSite } = useContext(SiteContext);
  const { selectedDirection, setSelectedDirection } = useContext(DirectionContext);


  const handleChangeSite = selectedSite => {
    setSelectedSite(selectedSite);
    console.log(selectedSite);
    setTimeout(() => {
      getGareId();
    }, 100);
    
  }

 

  const handleChangeDirection = selectedDirection => {
    setSelectedDirection(selectedDirection);
    console.log(selectedDirection);
    centerMap(selectedDirection.value);
  }

  


  return (
    <div className="box--filter filterBox">
    <h2 className="filterBox__headline">{text}</h2>

    {name==="site"?
      <Select
        value={selectedSite}
        onChange={handleChangeSite}
        options={dataSites}
      />
    :
    <Select
      value={selectedDirection}
      onChange={handleChangeDirection}
      options={dataDirection}
    />  
  }

      
    </div>
  );
};




// function FilterBox({ name, text}) {

//   const [selectOptionSite, setSelectOptionSite] = useState();

//   const handleChange = selectOptionSite => {
//     setSelectOptionSite(selectOptionSite);
//     console.log(selectOptionSite);
//   }

//   return (
  
//       <div className="box--filter filterBox">
//       <h2 className="filterBox__headline">{text}</h2>

//       {name === "site" ?
//         <Select
//           value={selectOptionSite}
//           onChange={handleChange}
//           options={dataSites}
//         />
//         :""
//         // <Select
//         //   value={selectedOption}
//         //   onChange={this.handleChange}
//         //   options={options}
//         // />
//       }


//       </div>

//   );
// }

export default FilterBox;