import React from 'react';

function Popup({sport,lines,name}) {
  if(name==="popupLinie"){
    return (
      <div className="popup popup--linie">
        <div className={"popup__icon icon--rer icon--rer--"+lines}>{lines}</div>
        <div className={"popup__icon icon--sport icon--sport--"+sport}></div>
        
      </div>
    );
  } else{
    return (
      <div className="popup popup--state">
        <div className="popup__icon icon--state"></div>
        <div>Nom du Station RER</div>  
      </div>
    );

  }
  
}

export default Popup;