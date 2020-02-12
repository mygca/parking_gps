import React from 'react';
import FilterAffichage from './Filter/FilterAffichage'

function FilterBoxAffichage() {
  return (
    <div className="wrapper--filterAffichage">
      <FilterAffichage name="prix" />
      <FilterAffichage name="distance" />
    </div>
  );
}

export default FilterBoxAffichage;