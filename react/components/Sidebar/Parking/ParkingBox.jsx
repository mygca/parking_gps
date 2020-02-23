import React, { useState,useEffect } from 'react';
import RerArrete from './RerArrete'
import Favorit from './Favorit'
import ParkingOptions from './ParkingOptions'
import Distance from './Distance'
import Price from './Price'
import ButtonSeeMore from './ButtonSeeMoor'
import ParkingOpend from './ParkingOpend'
import gareIdToGareName from '../../../functions/map/gareIdToGareName';







function Parking({data, dataGares, garesLines}) {
  const [isOpen, setIsOpen] = useState(false);
  const [garesIdInLines, setgaresIdInLines] = useState(null);
  //console.log(isOpen);

  const toFalse = ()=> {
    setIsOpen(!isOpen);
  }

  const getgareIdInLine = () => {

    // const gareIdInLine = data.gares_id.filter(value =>  ( garesLines.include(value)
    //   // return Object.values(garesLines).include(pbGareId)
    //   // garesLines.map(gareId => {
    //   //   // return gareId == value
    //   //   if (gareId == value) {
    //   //     return value
    //   //   }
    //   // })
    // ))
    // let gareIdInLine = data.gares_id.filter(value => garesLines.includes(value) )
    //console.log(garesLines)
    //let gareIdInLine = garesLines.filter(gareLine => gareLine.includes(data.gares_id) )
    //console.log(gareIdInLine)
    //console.log(value)

    //setgaresIdInLines({gareIdInLine})
    //console.log(gareIdInLine)
    //return gareIdInLine

    if (data.gares_id != null) {

      const gareIdLine = [];
  
      //console.log(typeof data.gares_id)
  
      for (const pbgi of data.gares_id) 
      {
        if ( garesLines.includes(pbgi) )
        {
          gareIdLine.push(pbgi)
        }
      }
      //console.log(gareIdLine)
      setgaresIdInLines({gareIdLine})
      //return gareIdLine
    }
    else {
      console.log('rotai')
    }

  }


  //console.log(garesIdInLines)
  
  useEffect(() => {
    //showParkings({data})

  //  const gareIdInLine = data.gares_id.filter(value => {
  //     // return Object.values(garesLines).include(pbGareId)
  //     garesLines.map(gareId => {
  //       // return gareId == value
  //       if (gareId == value) {
  //         return value
  //       }
  //     })
  // })
   getgareIdInLine();

   //setgaresIdInLines(getgareIdInLine())

  }, [])

  return (
    <div className="box--parking parking">

      <div className="wrapper--flex">
        <div>
          {/* <h3>Parking-Vincennes Chateau</h3> */}
          <h3>{data.gares_id}</h3>
          {/* {console.log(dataGares.getGaresIdArray)} */}
          {/* <h3>{gareIdToGareName(data.gares_id, dataGares)}</h3> */}
   
          {/* {console.log(garesLines.getGaresIdArray.map(String))} */}
          {/* {console.log(typeof garesLines)} */}
          {/* {
           
           garesIdInLines.map((value) =>(
                            
                            <RerArrete name={gareIdToGareName(value, dataGares)}/> 
                          ))

          } */}

          { 
          
            //garesIdInLines && console.log(Object.values(garesIdInLines))
            garesIdInLines && Object.values(garesIdInLines).map( value =>(

            //console.log(value)
              value.map( item => (

                <RerArrete name={gareIdToGareName(item, dataGares)}/> 

                // value.map((item) => {
                //   //console.log(item)
                //    <RerArrete name={item}/> 
                // })
              ))
            ))
          }
        </div>
        <div className="wrapper--flex">
          <Favorit />
          <ButtonSeeMore onClick={toFalse} isOpen={isOpen} />
        </div>
      </div>

      <div className="wrapper--flex">
        <div className="parking__options">
          <ParkingOptions name="24"/>
          <ParkingOptions name="handicape"/>
          <ParkingOptions name="securite"/>
        </div>
        {isOpen===false?
          <Price data={data}/>
        :""}
      </div>

      <div className="parking__distance">
        <Distance name="En Pied" value="50m - 3min"/>
        <Distance name="En Train" value="20km - 20min"/>
      </div>

      {isOpen===true?
        <ParkingOpend data={data} />
      :""}

    </div>
  );
}

export default Parking;