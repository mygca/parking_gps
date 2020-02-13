//import React, { useContext } from 'react';
// import GareIDContext from '../../contexts/GareIDContext'

export function getGareId(){

  console.log("gare id")

  //const { selectedGareID, setSelectedGareID } = useContext(GareIDContext);

  // const handleChangeGareID = selectedGareID => {
  //   setSelectedGareID(selectedGareID);
  //   console.log(selectedGareID);
  //   centerMap(selectedGareID.value);
  // }


  //get all circels of svg which is selected
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

      return selectedGareIDoutput;

      // set state gare id
      // handleChangeGareID(selectedGareID)



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