export function centerMap(sport){

  let scrollContainer=document.querySelector(".wrapper__map");
  let scrollElement=document.querySelector(".box--carte");
  

  let imgWrapperHeight=scrollContainer.offsetHeight;
  let imgWrapperWidth=scrollContainer.offsetWidth;

  let imgHeight=scrollElement.clientHeight
  let imgWidth=scrollElement.clientWidth

  console.log("wrapper height "+imgWrapperHeight);
  console.log("wrapper imgHeight "+imgHeight);

  let yScroll = (imgHeight-imgWrapperHeight)/2;
  let xScroll = (imgWidth-imgWrapperWidth)/2;

  console.log("x "+xScroll +" y "+yScroll)
  scrollContainer.scrollTo(xScroll, yScroll);

  // let direction =arrivalDirection;

  // switch (direction) {
  //   case 'nord':

  //     return scrollContainer.scrollTo(xScroll, 0);
  //   case 'east':
  //     return scrollContainer.scrollTo(imgWidth, yScroll);
  //   case 'south':
  //     return scrollContainer.scrollTo(xScroll, imgHeight);
  //   case 'west':
  //     return scrollContainer.scrollTo(0, yScroll);
  //   default:
  //     return scrollContainer.scrollTo(xScroll, yScroll);
      
  // }


  // display state

  if(typeof sport ==="string"){
    console.log("sport is string")

    //reset circel size
    let circles = document.querySelectorAll("circle");
    for (let i = 0; i < circles.length; i++) {
      circles[i].setAttribute('r', "8" );
      circles[i].style.fill="white";
      circles[i].style.display="none";
    }

    //display statio Circle + icon
    setTimeout(() => {
      let selectedSite= document.querySelectorAll('['+sport+']');
      
      for (let i = 0; i < selectedSite.length; i++) {
        selectedSite[i].setAttribute('r', "18" );
        selectedSite[i].style.fill="#fff";
      }
      
      let selectedSiteStadion= document.querySelector('['+sport+'stadion]');
      let allStatdionIcon=document.querySelectorAll('.icon--site');
      for (let i = 0; i < allStatdionIcon.length; i++) {
        allStatdionIcon[i].style.display="none";
      }
      selectedSiteStadion.style.display="block";


    }, 100);
  }else{
    console.log("sport not string")
    let allStatdionIcon=document.querySelectorAll('.icon--site');
    for (let i = 0; i < allStatdionIcon.length; i++) {
      allStatdionIcon[i].style.display="none";
    }
  }
  
  
  
  

  // selectedSite.setAttribute('r', "20" );
  // selectedSite.style.fill="red";



}