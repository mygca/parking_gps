import React from 'react';

import FilterBox from './FilterBox';
import Button from '../../Global/Button';
import Logo from '../../Global/Logo';
import { Link } from 'react-router-dom'

//import LanguageSwitcher from '../../Global/LanguageSwitcher'


const MainFilterSection = ({sport,setSport}) => {


  return (
    <div className="wrapper--filter">


      <Logo />
      <FilterBox setSport={setSport} sport={sport} name="site" text="Quoi ton site"/>
      {/* <FilterBox setSport={setSport} name="direction" text="Direction d'arrive"/> */}

      <Button  name="Valide"> Valide </Button>
      {/* <h2>{selectedSite}</h2> */}
    </div>
  );
}

export default MainFilterSection;