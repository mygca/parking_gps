export function centerMap(sport,direction){

  let scrollContainer=document.querySelector(".wrapper__map");
  let scrollElement=document.querySelector(".box--carte");
  
  // get Element Dimensions
  let imgWrapperHeight=scrollContainer.offsetHeight;
  let imgWrapperWidth=scrollContainer.offsetWidth;

  let imgHeight=scrollElement.clientHeight
  let imgWidth=scrollElement.clientWidth

 
  // get value too center the tow boxes
  let yScroll = (imgHeight-imgWrapperHeight)/2;
  let xScroll = (imgWidth-imgWrapperWidth)/2;


  // scroll to center
  scrollContainer.scrollTo(xScroll, yScroll);




  //let direction = arrivalDirection;
  // setTimeout(() => {
  //   console.log("direction "+direction)
  // }, 100);


  // center state in the viewport if sport is selected
  switch (sport) {
    case 'athletik':
    case 'plonge':
    case 'natationdenise':
    case 'natationsynchronisee':
    case 'badminton':
    case 'volleyball':
      return scrollContainer.scrollTo(xScroll, 0) ;
    case 'aviron':
    case 'canoe':
      return scrollContainer.scrollTo(imgWidth, 0) ;
    case 'bmx':
    case 'cyclismpist':
    case 'equitation':
    case 'golf':
    case 'handball':
      return scrollContainer.scrollTo(0, yScroll) ;
    case 'hockey':
    case 'vtt':
      return scrollContainer.scrollTo(0, 0) ;
    case 'lutte':
      return scrollContainer.scrollTo(xScroll, 0) ;
    default:
      return scrollContainer.scrollTo(xScroll, yScroll);
  }
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




