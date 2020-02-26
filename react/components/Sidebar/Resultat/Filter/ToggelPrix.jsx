import React from 'react';

function ToggelPrix() {
  return (
    <div className=" button--toggelPrix">
      <div className="wrapper--flex wrapper--flex--start wrapper--flex--center">
        <label>Trier pas prix</label>
        <div className="wrapper--flex">
          <button className="button">Croissant</button>
          <button className="button">Dècroissant</button>
        </div>
      </div>
    </div>
  );
}

export default ToggelPrix;