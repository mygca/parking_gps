import React from 'react';

function ButtonBack({setIsSelected}) {
  function handlerReturn(){
    setIsSelected("false")

    let circles = document.querySelectorAll("circle");
    for (let i = 0; i < circles.length; i++) {
      circles[i].style.display="none";
      circles[i].style.fill="#fff";
    }

    let circleBackground = document.querySelectorAll(".circle__background");
    for (let i = 0; i < circleBackground.length; i++) {
      const element = circleBackground[i];
      element.remove();  
    }
  }
  return (
  <button className="button--back" onClick={handlerReturn}>Back</button>
  );
}

export default ButtonBack;