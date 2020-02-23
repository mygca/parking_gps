export default function gareIdToGareName(pbGareId, dataGares){
  //console.log("gare id to gare name");

  let nameGareParkingBox = [];
  //Object.values(pbGareId).map(value => {
    Object.values(dataGares).map(e => {
      //let idgare = dataGares.garesId
      if ( pbGareId == e.garesId ) 
      // if ( dataGares.includes(value) ) 
      {
        //console.log('izz')
        // nameGareParkingBox = e.nomGare
        // return nameGareParkingBox

        nameGareParkingBox.push(e.nomGare)
      }
      
      // else
      // {
      //   nameGareParkingBox = 'bruh'
      //   //onsole.log(dataGares.nomGare)
      // }
    //})

    //return nameGareParkingBox;

  })

  return nameGareParkingBox;
  
}