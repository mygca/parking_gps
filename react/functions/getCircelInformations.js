export default function getCircelInformations({dataGares}){
    //console.log('circle hover')
    let circles = document.querySelectorAll("circle");

    for (let j = 0; j < circles.length; j++) {
  
      let circle = circles[j];
      
      let circleGareId= circle.getAttribute('data-station-id');
      let circleName;
      // for (let i = 0; i < dataGares.length; i++) {
      //   if(dataGares.gares_id===circleGareId){
      //     circleName=dataGares.nomGare[i];
      //   }
      // }

      const getGareName=()=>{
        Object.values(dataGares).map(e => {

          if ( circleGareId == e.garesId ) 
          {
            circleName=e.nomGare;
          }
      
        })
      
        return circleName;
      }

      

      circle.addEventListener("mouseover", function(){

        var circDescription = document.createElement('div');
        circDescription.innerHTML = "<p class='hoverInfo__decription'>Zone du parking</p><div class='parkingPreview__rerStationBox rerStationBox'><p class='rerStationBox__name'>"+getGareName()+"</p></div>";
  
        circDescription.setAttribute('class', 'parking__hoverInfo');
        document.body.appendChild(circDescription);
        var rect = circle.getBoundingClientRect();
  
        circDescription.style.top=rect.top+10+"px";
        circDescription.style.left=rect.left+10+"px";
      })
      circle.addEventListener("mouseleave", function(){
        document.querySelector(".parking__hoverInfo").remove()
      })
    }
}