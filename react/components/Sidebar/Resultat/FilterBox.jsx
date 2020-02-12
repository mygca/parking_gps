import React from 'react';
import Searchbar from './Filter/Searchbar';
import ToggelButton from './Filter/ToggelButton';
import Input from './Filter/Input';

function FilterBox() {
  return (
    <div className="output__filter">
      <Searchbar />
      
        <div className="wrapper--flex">
          <ToggelButton name="24/24"/>
          <ToggelButton name="handicap"/>
          <ToggelButton name="camera"/>
        </div>
        <Input name="Hauter Minimum" />
    </div>
  );
}

export default FilterBox;