export function getStadion(sport){

  // display state

  if(typeof sport ==="string"){
    console.log("sport is string")

    //reset circel size
    setTimeout(() => {
      // hid all sircels in svg
      let circles = document.querySelectorAll("circle");
      for (let i = 0; i < circles.length; i++) {
        circles[i].setAttribute('r', "8" );
        circles[i].style.fill="white";
        circles[i].style.display="none";
      }
    }, 100);

    //display statio Circle + icon
    setTimeout(() => {



      // show station(circle) of site
      let selectedSite= document.querySelectorAll('['+sport+']');
  
      for (let i = 0; i < selectedSite.length; i++) {
        // define style
        selectedSite[i].setAttribute('r', "18" );
        selectedSite[i].style.fill="#fff";
        // display
        selectedSite[i].style.display="block";
      }
      
      // show station(iocn) next to circle
      let selectedSiteStadion= document.querySelector('['+sport+'stadion]');
      let allStatdionIcon=document.querySelectorAll('.icon--site');

      //reset
      for (let i = 0; i < allStatdionIcon.length; i++) {
        allStatdionIcon[i].style.display="none";
      }
      //display just selected
      selectedSiteStadion.style.display="block";


    }, 100);
  }
  else{
    // hide all sites if nothing is selected
    let allStatdionIcon=document.querySelectorAll('.icon--site');
    for (let i = 0; i < allStatdionIcon.length; i++) {
      allStatdionIcon[i].style.display="none";
    }
  }

}