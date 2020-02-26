import React, { useState } from 'react';

function ToggelButton({name,is24,isHandicap,isSecurity,setIs24,setIsHandicap,setIsSecurity,label}) {


  function handlerClick(){
    console.log("button 24")

    if(name==="24"){
      setIs24(!is24)
      console.log(is24)
    }
    else if(name==="handicap"){
      setIsHandicap(!isHandicap);
    }
    else if(name==="security"){
      setIsSecurity(!isSecurity);
    }
  }

  switch (name) {
    case '24':
      return (
        <button 
        className={(is24) ? 'button button--toggel button--toggel--active': 
        'button button--toggel'} onClick={handlerClick}>{label}</button>
      )
    case 'handicap':
      return (
        <button className={(isHandicap) ? 
          'button button--toggel button--toggel--active': 
          'button button--toggel'} onClick={handlerClick}>{label}</button>
      )
    case 'security':
      return (<button className={(isSecurity) ? 
        'button button--toggel button--toggel--active': 
        'button button--toggel'} onClick={handlerClick}>{label}</button>)
    default:
      return "what";
  }
}

export default ToggelButton;

