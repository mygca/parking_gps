export default function filterParkingMap({showParkingsBox}){


  //get ratio du screen
  let carteWrapperWidth = document.querySelector(".box--carte").offsetWidth;
  let svgWrapperWidth = 1727;

  let ratio = (svgWrapperWidth /carteWrapperWidth)*1.738;
  console.log("ratio"+ratio)


  if (showParkingsBox != 0) 
  {

    //reset style of circle and zone
    let circles = document.querySelectorAll("circle");
    for (let i = 0; i < circles.length; i++) {
      circles[i].style.display="none";
    }

    let circleBackground = document.querySelectorAll(".circle__background");
    for (let i = 0; i < circleBackground.length; i++) {
      const element = circleBackground[i];
      element.remove();  
    }



    //get circle of displayed parkings
    let matchedGares =[];
    for (let i = 0; i < showParkingsBox.length; i++) {

      let matchedGareId = showParkingsBox[i];
      if(matchedGares.indexOf(matchedGareId)===-1){
        matchedGares.push(matchedGareId.gares_id)

      }
    }

    let mattchedArray= matchedGares.flat().map(String)

    for (let i = 0; i < mattchedArray.length; i++) {

      const mgi = mattchedArray[i];
      if (mgi != null) {
        
        let elementTest=document.querySelector('[data-station-id="'+mgi+'"]')

        if (elementTest != null) {
          

          // set style for circels
          elementTest.style.display="block";
          elementTest.setAttribute('r', "10" );

          var circBackground = document.createElement('div');
          circBackground.setAttribute('class', 'circle__background');
          document.querySelector(".carte__station").appendChild(circBackground);
          var rectCircle = elementTest.getBoundingClientRect();
          //console.log(rectCircle.top, rectCircle.right, rectCircle.bottom, rectCircle.left);

          // circBackground.style.top=(circle.getAttribute('cy')/ratio) + (ratio*15)+"px";
          // circBackground.style.left=(circle.getAttribute('cx')/ratio)+(-ratio*8)+"px";

          circBackground.style.top=(elementTest.getAttribute('cy')/ratio) +40+"px";
          circBackground.style.left=(elementTest.getAttribute('cx')/ratio)+"px";
        }
        
      }
    }
  }
  else 
  {
    console.log('no parking in cercle')
  }

  

  
}