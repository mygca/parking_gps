import React from 'react';

import FilterBox from './FilterBox';
import Button from '../../Global/Button';
import Logo from '../../Global/Logo';
import { Link } from 'react-router-dom'

//import LanguageSwitcher from '../../Global/LanguageSwitcher'


const MainFilterSection = ({sport,direction,setSport,setDirection}) => {


  return (
    <div className="wrapper--filter">


      <Logo />
      <FilterBox setSport={setSport} sport={sport} setDirection={setDirection} direction={direction}  name="site" text="Quoi ton site"/>
      <FilterBox setSport={setSport} setDirection={setDirection} direction={direction}  name="direction" text="Direction d'arrive"/>

      {/* <Link  name="Valide" to="/application">Valide </Link> */}
      {/* <h2>{selectedSite}</h2> */}
    </div>
  );
}

export default MainFilterSection;