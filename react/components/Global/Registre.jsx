
import React, { useState } from "react";
import ButtonClose from "./ButtonClose"

function Registre({setMoodConnection,setIsLogin,setPopUpNav}) {

  function handlerConnection(){
    {setMoodConnection("login")}
  }
  function handlerLogin(){
    {setIsLogin(true)}
    {setPopUpNav(false)}
  }
  
  return (
    <div className="popuo--connection connection--registre">
      <ButtonClose  setPopUpNav={setPopUpNav}/>
      <p className="popuo--connection__intro">Cree un comte pour enregistre tes Favorit</p>
      <div className="inputBox">
        <label>Nom</label>
        <input type="text"/>
      </div>
      <div className="inputBox">
        <label>E-mail</label>
        <input type="text"/>
      </div>
      <div className="inputBox">
        <label>Passwort</label>
        <input type="text"/>
      </div>
      <button className="button--primary" onClick={handlerLogin}>Submit</button>

      <button className="button button--underlined" onClick={handlerConnection}>Deja un compt</button>
      

    </div>
  )
  
}

export default Registre;