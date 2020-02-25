
import React, { useState } from "react";

// function ButtonCloseFilter({setPopUpNav}) {
function ButtonCloseFilter({setPopUpNav}) {

  function handlerClose(){
    // {setPopUpNav(false)}
  }
  
  return (
    <button className="button button--close" onClick={handlerClose}>x</button>
  )
  
}

export default ButtonCloseFilter;