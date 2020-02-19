export default function getGareId(setGareID,sport){

  console.log("gare id")

  let circles = document.querySelectorAll("circle");

  // display site
   
  setTimeout(() => {
    let selectedSite= document.querySelectorAll('['+sport+']');
      
    for (let i = 0; i < selectedSite.length; i++) {
      selectedSite[i].setAttribute('r', "18" );
      selectedSite[i].style.fill="#fff";
    }
  }, 100);

  for (let j = 0; j < circles.length; j++) {

    let circle = circles[j];

    //change radius of allcircel
    circle.setAttribute('r', "8" );

    //if hovered
    circle.addEventListener("click", function(){

      //reset circel size
      for (let i = 0; i < circles.length; i++) {
        circles[i].setAttribute('r', "8" );
      }

      //change styke of selected circle
      circle.setAttribute('r', "15" );

      //get gare id of selected circle
      let selectedGareIDoutput = circle.getAttribute('data-station-id');
      console.log(selectedGareIDoutput);

      // set state gare id
      setGareID(selectedGareIDoutput)

    });
  }


  
}

