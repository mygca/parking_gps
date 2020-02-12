import React from 'react';
//import Select from 'react-select';



function FilterBox({ name, text}) {
  return (
    <div className="box--filter filterBox">
    <h2 className="filterBox__headline">{text}</h2>
    <div className="selectPlaceholder">PlaceHolder</div>

      {/* <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      /> */}

    </div>
  );
}

export default FilterBox;