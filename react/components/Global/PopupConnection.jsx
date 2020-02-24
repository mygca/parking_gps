import React, { useState } from "react";
import Login from './Login';
import Registre from './Registre';
import Profil from './Profil';

function PopupConnection({isLogin,setIsLogin,setPopUpNav,moodConnection,setMoodConnection}) {

 
  
  return (
    <div className="popup--connection">
      {(moodConnection==="login")?
      <Login 
      setIsLogin={setIsLogin}
      setMoodConnection={setMoodConnection} 
      setPopUpNav={setPopUpNav}  />
      :
      (moodConnection==="registre")?
      <Registre 
      setIsLogin={setIsLogin} 
      setMoodConnection={setMoodConnection} 
      setPopUpNav={setPopUpNav}/>

      :<Profil setMoodConnection={setMoodConnection} setIsLogin={setIsLogin} setPopUpNav={setPopUpNav} />
      }
    </div>
  )
  
}

export default PopupConnection;