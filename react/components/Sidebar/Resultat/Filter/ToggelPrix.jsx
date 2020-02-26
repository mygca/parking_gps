import React from 'react';

function ToggelPrix({isPrixUp ,setIsPrixUp}) {

  function handlerClickUp(){
    setIsPrixUp(true)
  }

  function handlerClickDown(){
    setIsPrixUp(false)
  }
  return (
    <div className=" button--toggelPrix">
      <div className="wrapper--flex wrapper--flex--start wrapper--flex--center">
        <label>Trier pas prix</label>
        <div className="wrapper--flex">
          <button className={isPrixUp===true?"button button--active":"button"} onClick={handlerClickUp}>Croissant</button>
          <button className={isPrixUp===false?"button button--active":"button"} onClick={handlerClickDown}>Dècroissant</button>
        </div>
      </div>
    </div>
  );
}

export default ToggelPrix;