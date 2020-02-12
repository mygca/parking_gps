import React from 'react';

function Icon({name}) {
  return (
    //<div className={"distance__icon distance__icon--"+name}></div>
    <img src={"../../img/icon--"+name+".png"} alt=""/>
  );
}

export default Icon;