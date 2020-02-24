export function centerMap(sport,direction){

  console.log("center")

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

  //let direction = arrivalDirection;
  setTimeout(() => {
    console.log("direction "+direction)
  }, 100);
}



  // display state


  // switch (direction) {
  //   case 'nord':
  //     return scrollContainer.scrollTo(xScroll, 0) ;
  //   case 'east':
  //     return scrollContainer.scrollTo(imgWidth, yScroll);
  //   case 'south':
  //     return scrollContainer.scrollTo(xScroll, imgHeight);
  //   case 'west':
  //     return scrollContainer.scrollTo(0, yScroll);
  //   default:
  //     return scrollContainer.scrollTo(xScroll, yScroll);
  // }

  // switch (direction) {
  //   case 'nord':
  //     return console.log("nord") ;
  //   case 'east':
  //     return console.log("eats");
  //   case 'south':
  //     return console.log("south");
  //   case 'west':
  //     return console.log("west");
  //   default:
  //     return scrollContainer.scrollTo(xScroll, yScroll);
  // }




