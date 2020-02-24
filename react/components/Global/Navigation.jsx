
import React, { useState } from "react";

function Navigation({isHome,setIsHome,setPopUpNav,isLogin,setIsLogin,setMoodConnection,setIsSidebarFavoirit}) {

  function handlerHomeClick(){
    {setIsHome("true")}
  }
  function handlerConnectionClick(){
    {setPopUpNav("true")}
  }
  function handlerProfilClick(){
    {setPopUpNav("true")}
    {setMoodConnection("profil")}
  }

  function handlerFavoritClick(){
    {setIsSidebarFavoirit(true)}
    console.log("favorit")
  }

 
  
  return (
    <nav className="nav">
      <ul>
        <li className="nav__link" onClick={handlerHomeClick}>Home</li>
        
        {isLogin=== false?
        <div>
          <li className="nav__link" onClick={handlerConnectionClick}>Log In</li>
        </div>
          
        :
        <div className="wrapper--flex">
          <li className="nav__link"onClick={handlerFavoritClick} >Favorit</li>
          <p onClick={handlerProfilClick}>Martin</p>
        </div>
        }
        
      </ul>
    </nav>
  )
  
}

export default Navigation;