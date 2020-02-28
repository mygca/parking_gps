
import React, { useState } from "react";
import Logo from "./Logo";

function Navigation({isHome,setIsHome,setPopUpNav,isLogin,setIsLogin,setMoodConnection,setIsSidebarFavoirit,listFavorit,isSelected}) {

  console.log("Navigation",listFavorit)

  function handlerHomeClick(){
    {setIsHome("true")}
  }
  // function handlerConnectionClick(){
  //   {setPopUpNav("true")}
  // }
  // function handlerProfilClick(){
  //   {setPopUpNav("true")}
  //   {setMoodConnection("profil")}
  // }

  function handlerFavoritClick(){
    {setIsSidebarFavoirit(true)}
    console.log("favorit")
    
  }

 
  
  return (
    <nav className="nav">
      <ul>
      <li className="nav__link" onClick={handlerHomeClick}><Logo /><p>Hello Parking</p></li>
        {/* <li className="nav__link" onClick={handlerHomeClick}>Home</li> */}

        {isSelected==="true" && isLogin===true?
          <li className={listFavorit.length>0?"nav__link nav__link--fav nav__link--fav--active":"nav__link nav__link--fav"}  onClick={handlerFavoritClick}>Ma liste</li>
        :""}
        
      </ul>
    </nav>
  )
  
}

export default Navigation;