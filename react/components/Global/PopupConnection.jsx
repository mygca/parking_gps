import React, { useState,useEffect } from "react";
import Login from './Login';
import Registre from './Registre';
import Profil from './Profil';

function PopupConnection({isLogin,isHome,setIsHome, setIsLogin,setPopUpNav,moodConnection,setMoodConnection,setIsSidebarFavoirit,isFirstFav}) {
 
  
  return (
    <div className="popup--connection">



    
        {/* <Login 
        setIsLogin={setIsLogin}
        setMoodConnection={setMoodConnection} 
        setPopUpNav={setPopUpNav}
        setIsHome={setIsHome} 
        setIsSidebarFavoirit={setIsSidebarFavoirit} /> */}
    

      {(moodConnection==="login")?
        <Login 
        setIsLogin={setIsLogin}
        setMoodConnection={setMoodConnection} 
        setPopUpNav={setPopUpNav}
        setIsHome={setIsHome} 
        setIsSidebarFavoirit={setIsSidebarFavoirit} />
        :
      (moodConnection==="registre")?
        <Registre 
        setIsLogin={setIsLogin} 
        setMoodConnection={setMoodConnection} 
        setPopUpNav={setPopUpNav}/>

      :""
      }
    </div>
  )
  
}

export default PopupConnection;