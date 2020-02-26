
import React, { useState } from "react";
import ButtonClose from "./ButtonClose"

function Login({setMoodConnection,setIsLogin,setIsHome,setPopUpNav,setIsSidebarFavoirit}) {

  function handlerConnection(){
    {setMoodConnection("registre")}
  }
  function handlerLogin(){
    // {setIsLogin(true)}
    {setPopUpNav(false)}
    {setIsHome("false")}
    {setIsSidebarFavoirit(true)}
  }
 
  
  return (
    <div className="popuo--connection connection--login">
      <ButtonClose  setPopUpNav={setPopUpNav}/>
      <p className="popuo--connection__intro">Log In</p>
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