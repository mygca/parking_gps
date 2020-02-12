import React from 'react';

import FilterBox from './FilterBox';
import Button from '../../Global/Button';
import Logo from '../../Global/Logo';

function MainFilterSection() {
  return (
    <div className="wrapper--filter">
      <Logo />
      <FilterBox name="site" text="Quoi ton site"/>
      <FilterBox name="direction" text="Direction d'arrive"/>
      <Button name="Valide" />
    </div>
  );
}

export default MainFilterSection;