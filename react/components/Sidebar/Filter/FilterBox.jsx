import React, { useState } from 'react';
import Select from 'react-select';
import {dataSites} from '../../../data/sites';



function FilterBox({ name, text}) {

  const [selectOptionSite, setSelectOptionSite] = useState();

  const handleChange = selectOptionSite => {
    setSelectOptionSite(selectOptionSite);
    console.log(selectOptionSite);
  }

  return (
    <div className="box--filter filterBox">
    <h2 className="filterBox__headline">{text}</h2>

    {name === "site" ?
      <Select
        value={selectOptionSite}
        onChange={handleChange}
        options={dataSites}
      />
      :""
      // <Select
      //   value={selectedOption}
      //   onChange={this.handleChange}
      //   options={options}
      // />
    }


    </div>
  );
}

export default FilterBox;