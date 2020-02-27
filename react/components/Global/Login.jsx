
import React, { useState } from "react";
import ButtonClose from "./ButtonClose";
const logologin= require('../../img/login--logo.png');

function Login({setMoodConnection,setIsLogin,setIsHome,setPopUpNav,setIsSidebarFavoirit}) {

  function handlerConnection(){
    {setMoodConnection("registre")}
  }
  function handlerLogin(){
    {setIsLogin(true)}
    {setPopUpNav(false)}
    {setIsHome("false")}
    {setIsSidebarFavoirit(true)}
  }
 
  
  return (
    <div className="popuo--connection connection--login">
      <img src={logologin} className="popuo--connection__logo" alt=""/>
      <ButtonClose  setPopUpNav={setPopUpNav}/>
      <p>Renseigner votre mail et un mot de passe pour récupérer votre liste directement sur notre application mobile.</p>
      <div className="inputBox">
        <label>E-mail</label>
        <input type="text"/>
      </div>
      <div className="inputBox">
        <label>Passwort</label>
        <input type="text"/>
      </div>
      <button className="button--primary" onClick={handlerLogin}>Log in</button>

      {/* <button className="button button--underlined" onClick={handlerConnection}>Pas encore un compt</button> */}
      

    </div>
  )
  
}

export default Login;