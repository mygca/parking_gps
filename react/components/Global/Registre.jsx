
import React, { useState } from "react";
import ButtonClose from "./ButtonClose";
const logologin= require('../../img/login--logo.png');

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
      <img src={logologin} className="popuo--connection__logo" alt=""/>
      <ButtonClose  setPopUpNav={setPopUpNav}/>
      <p>Renseigner votre mail et un mot de passe pour récupérer votre liste directement sur notre <span>application mobile.</span></p>
      <div className="inputBox">
        <label>Adresse mail / nom d’utilisateur</label>
        <input placeholder="genanunes00@gmail.com" type="text"/>
      </div>
      <div className="inputBox">
        <label>Mot de passe</label>
        <input placeholder="*******************" type="text"/>
      </div>
      <button className="button--primary button--valide" onClick={handlerLogin}>Submit</button>

      {/* <button className="button button--underlined" onClick={handlerConnection}>Deja un compt</button> */}
      

    </div>
  )
  
}

export default Registre;