export default function getGareId(setGareID){

  console.log("gare id")

  let circles = document.querySelectorAll("circle");

  console.log(circles)

  for (let j = 0; j < circles.length; j++) {

    let circle = circles[j];

    //change radius of allcircel
    circle.setAttribute('r', "8" );

    //if hovered
    circle.addEventListener("click", function(){

      //change styke of selected circle
      circle.setAttribute('r', "15" );

      //get gare id of selected circle
      let selectedGareIDoutput = circle.getAttribute('data-station-id');
      console.log(selectedGareIDoutput);

      // set state gare id
      setGareID(selectedGareIDoutput)



      // get gare name of gare id
      // for (let i = 0; i < STATIONS[0].length; i++) {
      //   let station = STATIONS[0][i];
      //   if(station.fields.gares_id == selectedStationId){   
      //     _this.handlerGareChange(station.fields.nom_gare);  
      //   }
      // }

    });
  }
}

