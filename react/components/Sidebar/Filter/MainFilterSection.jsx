import React from 'react';

import FilterBox from './FilterBox';
import Button from '../../Global/Button';
import Logo from '../../Global/Logo';

//import LanguageSwitcher from '../../Global/LanguageSwitcher'


function MainFilterSection() {


  return (
    <div className="wrapper--filter">


      <Logo />
      <FilterBox name="site" text="Quoi ton site"/>
      <FilterBox name="direction" text="Direction d'arrive"/>
      <Button name="Valide" />
      {/* <h2>{selectedSite}</h2> */}
    </div>
  );
}

export default MainFilterSection;