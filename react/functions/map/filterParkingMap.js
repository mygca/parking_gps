export default function filterParkingMap({showParkingsBox}){

  if (showParkingsBox != 0) 
  {

    console.log("what match!!!!!")
    console.log(showParkingsBox.length);

    let circles = document.querySelectorAll("circle");
    for (let i = 0; i < circles.length; i++) {
      circles[i].style.display="none";
    }

    let matchedGares =[];
    for (let i = 0; i < showParkingsBox.length; i++) {
      //console.log(i);
      let matchedGareId = showParkingsBox[i];
      if(matchedGares.indexOf(matchedGareId)===-1){
        matchedGares.push(matchedGareId.gares_id)
        console.log("new")
      }
    }
    console.log("filtered Array "+matchedGares)
    let mattchedArray= matchedGares.flat().map(String)
    //console.log(mattchedArray);



    for (let i = 0; i < mattchedArray.length; i++) {

    
      const mgi = mattchedArray[i];
      if (mgi != null) {
        

        let elementTest=document.querySelector('[data-station-id="'+mgi+'"]')
        //console.log(elementTest);
        //console.log(elementTest);
        if (elementTest != null) {
          elementTest.style.display="block";
          elementTest.style.fill="red";
        }
        
      }
    }
  }
  else 
  {
    console.log('no parking in cercle')
  }

  

  
}