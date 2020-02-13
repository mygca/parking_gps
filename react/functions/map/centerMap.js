export function centerMap(){
  let scrollContainer=document.querySelector(".wrapper__map");
  let scrollElement=document.querySelector(".box--carte");

  let imgWrapperHeight=scrollContainer.offsetHeight;
  let imgWrapperWidth=scrollContainer.offsetWidth;

  let imgHeight=scrollElement.clientHeight
  let imgWidth=scrollElement.clientWidth

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
}