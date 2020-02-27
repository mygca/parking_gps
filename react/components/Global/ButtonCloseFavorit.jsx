
import React, { useState } from "react";

function ButtonCloseFavorit({setIsSidebarFavoirit}) {

  function handlerClose(){
    {setIsSidebarFavoirit(false)}
  }
  
  return (
    <button className="button button--close button--close-Fav" onClick={handlerClose}>x</button>
  )
  
}

export default ButtonCloseFavorit;