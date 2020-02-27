import React, {useState,useEffect} from 'react';
//import getCircelInformations from '../../../functions/getCircelInformations';


const RerArrete = ({parkingBoxGareID,dataGares, garesIdInLines, data, item, parkingName, value}) => 
{
//console.log('in rer arret')
  const [rerStationName, setRerStationName] = useState()

  // let circleName = [];
  // Object.values(dataGares).map(e => {

  //   // console.log(e) // render 1 parking object
  //   //console.log(parkingBoxGareID) // render [__ , __]
  //   // if ( item == e.garesId) 
  //   // {
  //   //   circleName.push(e.nomGare);
  //   // }
  //   for (let i = 0; i < parkingBoxGareID.length; i++) {
  //     const element = parkingBoxGareID[i];
  //     if ( element == e.garesId) 
  //     {
  //       circleName.push(e.nomGare);
  //     }
      
  //   }
  // })
  let circleName = [];
  Object.values(dataGares).map(e => {

    // console.log(e) // render 1 parking object
    //console.log(parkingBoxGareID) // render [__ , __]
    // if ( item == e.garesId) 
    // {
    //   circleName.push(e.nomGare);
    // }
    // for (let i = 0; i < value.length; i++) {
      // const element = value[i];
      // if ( element == e.garesId) 
      if ( value == e.garesId) 
      {
        circleName.push(e.nomGare);
      }
      
    // }
  })




  useEffect(() => {
    //getCircelInformations({dataGares})
    setRerStationName(circleName)
  
    
  }, [data])


  return (
    <div className="parkingPreview__rerStationBox rerStationBox">
      <img alt="rer icon" className="rerStationBox__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/RER.svg/1200px-RER.svg.png" />

      { 

        // console.log(rerStationName)
        // console.log(parkingName)
        // parkingName.map( (name) => {
        //   <div>

        //     <img alt="rer icon" className="rerStationBox__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/RER.svg/1200px-RER.svg.png" />
        //     <p className="rerStationBox__name">{name}</p>
        //   </div>

        // })
      }
      <p className="rerStationBox__name">{rerStationName}</p>
      {/* <p className="rerStationBox__name">{value}</p> */}
      {/* {console.log(name)} */}
      
    </div>
  );
}

export default RerArrete;