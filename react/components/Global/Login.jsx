
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
      <p>Connetez vous et récupérez votre liste directement sur notre <span>application mobile.</span></p>
      <div className="inputBox">
        <label>Adresse mail / nom d’utilisateur</label>
        <input placeholder="genanunes00@gmail.com" type="text"/>
      </div>
      <div className="inputBox">
        <label>Mot de passe</label>
        <input placeholder="*******************" type="text"/>
      </div>
      <button className="button--primary" onClick={handlerLogin}>Go</button>

      {/* <button className="button button--underlined" onClick={handlerConnection}>Pas encore un compt</button> */}
      

    </div>
  )
  
}

export default Login;