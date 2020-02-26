
import React, { useState } from "react";

// function ButtonCloseFilter({setPopUpNav}) {
const ButtonCloseFilter = ({isGareIdSelected, setIsGareIdSelected, setPopUpNav, gareID, setGareID}) => {

  const handlerClose = () => {
    console.log('want to close')
    // {setPopUpNav(false)}
      // setIsGareIdSelected={setIsGareIdSelected}
    {setIsGareIdSelected(false)}
      // setIsGareIdSelected(true)
    {setGareID(null)}
  }
  
  return (
    <button className="button button--close" onClick={handlerClose}>x</button>
  )
  
}

export default ButtonCloseFilter;