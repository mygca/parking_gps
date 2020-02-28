import React from 'react';
import Searchbar from './Filter/Searchbar';
import ToggleButton from './Filter/ToggleButton';
import Input from './Filter/Input';
import TogglePrix from './Filter/TogglePrix';

function FilterBox({setIs24,setIsHandicap,setIsSecurity,is24,isHandicap,isSecurity,minHeight,setMinHeight,isPrixUp ,setIsPrixUp}) {
  return (
    <div className="output__filter">
      {/* <Searchbar /> */}
      
        <div className="wrapper--flex wrapper--flex--start">
          <ToggleButton name="24" label="Ouvert 24/24" setIs24={setIs24} is24={is24}/>
          <ToggleButton name="handicap" label="Mobilité réduite" setIsHandicap={setIsHandicap} isHandicap={isHandicap}/>
          <ToggleButton name="security" label="Caméra de surveillance" setIsSecurity={setIsSecurity} isSecurity={isSecurity}/>
          <Input name="Hauteur voiture" setMinHeight={setMinHeight} minHeight={minHeight} />
        </div>
        <TogglePrix isPrixUp={isPrixUp} setIsPrixUp={setIsPrixUp}/>

        

    </div>
  );
}

export default FilterBox;