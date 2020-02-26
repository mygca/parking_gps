import React from 'react';

function Popup({sport,lines,name}) {
  if(name==="popupLinie"){
    return (
      <div className="popup popup--linie">
        {console.log(lines)}
        {lines.length>1?
        <div className="wrapper--flex">
          <div className={"popup__icon icon--rer icon--rer--"+lines[0]}>{lines[0]}</div>
          <div className={"popup__icon icon--rer icon--rer--"+lines[1]}>{lines[1]}</div>
        </div>
        :<div className={"popup__icon icon--rer icon--rer--"+lines}>{lines}</div>
        }
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