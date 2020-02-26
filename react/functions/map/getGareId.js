export default function getGareId(setGareID,sport){

  let carteWrapperWidth = document.querySelector(".box--carte").offsetWidth;
  let svgWrapperWidth = 1727;

  console.log("carteWrapperWidth "+carteWrapperWidth)
  console.log("carteWrapperWidth "+svgWrapperWidth)
  let ratio = (svgWrapperWidth /carteWrapperWidth)*1.738;
  console.log("ratio"+ratio)


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
    circle.setAttribute('r', "10" );
    var circBackground = document.createElement('div');
    circBackground.setAttribute('class', 'circle__background');
    document.querySelector(".carte__station").appendChild(circBackground);
    var rectCircle = circle.getBoundingClientRect();
    console.log(rectCircle.top, rectCircle.right, rectCircle.bottom, rectCircle.left);

    // circBackground.style.top=(circle.getAttribute('cy')/ratio) + (ratio*15)+"px";
    // circBackground.style.left=(circle.getAttribute('cx')/ratio)+(-ratio*8)+"px";

    circBackground.style.top=(circle.getAttribute('cy')/ratio) +40+"px";
    circBackground.style.left=(circle.getAttribute('cx')/ratio)+"px";

    circle.style.fill="#fff"

    //if click
    circle.addEventListener("click", function(){

      //reset circel size
      for (let i = 0; i < circles.length; i++) {
        circles[i].setAttribute('r', "10" );
      }

      //change styke of selected circle
      circle.setAttribute('r', "15" );

      //get gare id of selected circle
      let selectedGareIDoutput = circle.getAttribute('data-station-id');
      console.log(selectedGareIDoutput);

      // set state gare id
      setGareID(selectedGareIDoutput)

    });

    // circle.addEventListener("mouseover", function(){
    //   console.log("hover")
    //   var circDescription = document.createElement('div');
    //   circDescription.innerHTML = "<p class='hoverInfo__decription'>Zone du parking</p><div class='parkingPreview__rerStationBox rerStationBox'><img alt='rer icon' class='rerStationBox__icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/RER.svg/1200px-RER.svg.png'><p class='rerStationBox__name'>Nom du station rer</p></div>";

    //   circDescription.setAttribute('class', 'parking__hoverInfo');
    //   document.body.appendChild(circDescription);
    //   var rect = circle.getBoundingClientRect();
    //   console.log(rect.top, rect.right, rect.bottom, rect.left);

    //   circDescription.style.top=rect.top+10+"px";
    //   circDescription.style.left=rect.left+10+"px";
    // })
    // circle.addEventListener("mouseleave", function(){
    //   document.querySelector(".parking__hoverInfo").remove()
    // })
  }


  
}

