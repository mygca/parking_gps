import React from 'react';
import Searchbar from './Filter/Searchbar';
import ToggelButton from './Filter/ToggelButton';
import Input from './Filter/Input';
import ToggelPrix from './Filter/ToggelPrix';

function FilterBox({setIs24,setIsHandicap,setIsSecurity,is24,isHandicap,isSecurity,minHeight,setMinHeight,}) {
  return (
    <div className="output__filter">
      {/* <Searchbar /> */}
      
        <div className="wrapper--flex wrapper--flex--start">
          <ToggelButton name="24" label="Ouvert 24/24" setIs24={setIs24} is24={is24}/>
          <ToggelButton name="handicap" label="Handicapé" setIsHandicap={setIsHandicap} isHandicap={isHandicap}/>
          <ToggelButton name="security" label="Securite" setIsSecurity={setIsSecurity} isSecurity={isSecurity}/>
        </div>
        <Input name="Hauter Minimum" setMinHeight={setMinHeight} minHeight={minHeight} />
        <ToggelPrix />

        

    </div>
  );
}

export default FilterBox;