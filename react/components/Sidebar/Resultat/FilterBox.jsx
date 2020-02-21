import React from 'react';
import Searchbar from './Filter/Searchbar';
import ToggelButton from './Filter/ToggelButton';
import Input from './Filter/Input';

function FilterBox({setIs24,setIsHandicap,setIsSecurity,is24,isHandicap,isSecurity,minHeight,setMinHeight,}) {
  return (
    <div className="output__filter">
      {/* <Searchbar /> */}
      
        <div className="wrapper--flex">
          <ToggelButton name="24" setIs24={setIs24} is24={is24}/>
          <ToggelButton name="handicap" setIsHandicap={setIsHandicap} isHandicap={isHandicap}/>
          <ToggelButton name="security" setIsSecurity={setIsSecurity} isSecurity={isSecurity}/>
        </div>
        <Input name="Hauter Minimum" setMinHeight={setMinHeight} minHeight={minHeight} />

    </div>
  );
}

export default FilterBox;