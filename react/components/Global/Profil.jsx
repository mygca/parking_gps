
import React, { useState } from "react";
import ButtonClose from "./ButtonClose"

function Profil({setMoodConnection,setPopUpNav,setIsLogin}) {

  function handlerLogOut(){
    {setIsLogin(false)}
    {setPopUpNav(false)}
    {setMoodConnection("login")}
  }
  
  return (
    <div className="popuo--connection connection--profil">
      <ButtonClose  setPopUpNav={setPopUpNav}/>
      <p className="popuo--connection__intro">PROFIL</p>
      <button className="button button--underlined" onClick={handlerLogOut}>Deconnecte</button>
    </div>
  )
  
}

export default Profil;