function centerCarte(){
  console.log("hallo")

  console.log(document.querySelector(".map"));     

  let scrollContainer=document.querySelector(".wrapper__map");
  console.log(scrollContainer)
  let scrollContainer=document.querySelector(".wrapper__map");
  let scrollElement=document.querySelector(".box--carte");

  //wrapperSvg.className= "wrapperSvg";

  let imgWrapperHeight=scrollContainer.offsetHeight;
  let imgWrapperWidth=scrollContainer.offsetWidth;

  let imgHeight=scrollElement.clientHeight
  let imgWidth=scrollElement.clientWidth

  let yScroll = (imgHeight-imgWrapperHeight)/2;
  let xScroll = (imgWidth-imgWrapperWidth)/2;
}