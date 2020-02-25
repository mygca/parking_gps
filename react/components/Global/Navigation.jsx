
import React, { useState } from "react";

function Navigation({isHome,setIsHome,setPopUpNav,isLogin,setIsLogin,setMoodConnection,setIsSidebarFavoirit,listFavorit}) {

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
        
        {listFavorit.length>0?
          <button className="button--sendFavorits">Envoyer tes Favorits</button>
        :""
        }
        
      </ul>
    </nav>
  )
  
}

export default Navigation;