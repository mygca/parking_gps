
import React, { useState } from "react";

function ButtonClose({setPopUpNav}) {

  function handlerClose(){
    {setPopUpNav(false)}
  }
  
  return (
    <button className="button button--close" onClick={handlerClose}>x</button>
  )
  
}

export default ButtonClose;