export default function gareIdToGareName(pbGareId, dataGares){
  //console.log("convert gare id to gare name");

  let nameGareParkingBox = [];

  Object.values(dataGares).map(e => {

    if ( pbGareId == e.garesId ) 
    {
      nameGareParkingBox.push(e.nomGare)
    }

  })

  return nameGareParkingBox;
  
}