import React, { useState,useEffect } from 'react';
import RerArrete from './RerArrete'
import Favorit from './Favorit'
import ParkingOptions from './ParkingOptions'
import Distance from './Distance'
import Price from './Price'
import ButtonSeeMore from './ButtonSeeMoor'
import ParkingOpend from './ParkingOpend'
import gareIdToGareName from '../../../functions/map/gareIdToGareName';
import { array } from 'prop-types';
// import getCircelInformations from '../../../functions/getCircelInformations';







const Parking = ({data, dataGares, garesLines,is24, isHandicap, isSecurity,listFavorit, setListFavorit, gareId}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [garesIdInLines, setgaresIdInLines] = useState();
  const [parkingBoxGareId, setParkingBoxGareId] = useState();
  //console.log(isOpen);
  // console.log('how many parkings shown?')

  // const toFalse = ()=> {
  //   setIsOpen(!isOpen);
  // }

  const handleClickParkingBox = () => {
    console.log('click on Box')

    // Toggle opening ParkingBox for more informations about the parking
    setIsOpen(!isOpen);


    if (data.gares_id != null) {

      const parkingClickId = [];
    
      for (const pbgi of data.gares_id) 
      {
        if ( garesLines.includes(pbgi) )
        {
          parkingClickId.push(pbgi)
        }
      }
      console.log(parkingClickId)
      setParkingBoxGareId({parkingClickId})

      let circles = document.querySelectorAll("circle");
      for (let j = 0; j < circles.length; j++) {
        let circle = circles[j];
        circle.style.fill="#fff";
      }


      for (let i = 0; i < parkingClickId.length; i++) {
        const element = parkingClickId[i];

        let selectedParking= document.querySelector('[data-station-id="'+element+'"]');
        selectedParking.style.fill="blue";
      }

    }
    else {
      console.log('pb no gareId')
    }

  }
  
  
  //const test = []
  // const getgareIdInLine = () => {

  //   if (data.gares_id != null) {
  //     //console.log(data.gares_id) // Bon parkings to show
  //     for (const pbgi of data.gares_id) 
  //     {
  //       //console.log(pbgi) // ok every id is there
  //       //console.log(garesLines)
  //       if ( garesLines.includes(pbgi) )
  //       {
  //         // gareIdLine.push(pbgi)
  //         // console.log("pbgi", pbgi)
  //         //console.log("pbgi", pbgi)
  //         test.push(pbgi)

  //       }
  //     }
  //     //  setgaresIdInLines(test);
  //     // console.log("gareIdLine", gareIdLine) //toujours bon parkings to show
      

  //     // const returnGare = () => {
        
  //     // }
  //   }
  //   else {
  //     console.log('rotai')
  //   }

  // }

  const getgareIdInLine = () => {

    if (data.gares_id != null) {

      const gareIdLine = [];
    
      for (const pbgi of data.gares_id) 
      {
        if ( garesLines.includes(pbgi) )
        {
          gareIdLine.push(pbgi)
        }
      }
      setgaresIdInLines({gareIdLine})

    }
    else {
      console.log('rotai')
    }

  }

  
  useEffect(() => {
    //showParkings({data})

   getgareIdInLine();
  //  console.log("test", test)
  //  setgaresIdInLines(test);
  }, [])
  // console.log("lol", garesIdInLines)

  
  return (
    <div className="box--parking parking" onClick={handleClickParkingBox} >
      <p>{data.gares_id}</p>
      <div className="wrapper--flex">
        <div>
          {/* <RerArrete dataGares={dataGares} name={gareIdToGareName(item, dataGares)}/>  */}
          { 

          // setTimeout(() => {
          //   console.log(garesIdInLines)
          // }, 100);
          
          //console.log(garesIdInLines) // NO okay 

  /** TODO : Il fait faire un loop, pas un map  */
            // garesIdInLines && Object.values(garesIdInLines).map( value => (
            // //   // console.log(value) // tableau de valeur gareid OK
            //   value.map( (item) => (
            //   //   console.log(item) // 1 valeur okay
            //     //  <RerArrete key={index} name={gareIdToGareName(item, dataGares)}/> 
            // <RerArrete dataGares={dataGares} name={gareIdToGareName(item, dataGares)}/> 
            //   ))
            // ))


            garesIdInLines && Object.values(garesIdInLines).map( value => (

              value.map( (item, index) => (
                <RerArrete key={index} dataGares={dataGares} name={gareIdToGareName(item, dataGares)}/> 
              ))
            ))
            
            // garesIdInLines && garesIdInLines.map( value => {
            //   console.log(value) // tableau de valeur gareid OK
            //   // value.map( (item, index) => (
            //   //   console.log(item) // 1 valeur okay
            //   //   //  <RerArrete key={index} name={gareIdToGareName(item, dataGares)}/> 
            //   // ))
            // })
            
            // garesIdInLines && Object.values(garesIdInLines).map( value => (
              
              //   value.map( (item, index) => (
                //     <p>{item}</p>
                //   ))
                // ))
                // garesIdInLines && Object.values(garesIdInLines).map( value => (
                  
                  //   console.log(value)
                  //     // <p>{value}</p>
                  
                  // ))
                  //console.log(data.gares_id)
                  // data.gares_id.map( e => {
                    
                    //   e.map( i => {
                      //     <p>{i}</p>
                      
                      //   })
                      // })
                      
              // Object.values(data.gares_id).forEach( (value) => {
              //           //console.log(value)
              //           // <p>{ gareIdToGareName(value, gares) }</p>
              //           // <RerArrete key={index} name={gareIdToGareName(value, dataGares)}/> 
              //   value.map( (item, index) => (
              //     <RerArrete key={index} name={gareIdToGareName(item, dataGares)}/> 
              //   ))
              // })
              // (data.gares_id).map( (value) => {
              //           //console.log(value)
              //           // <p>{ gareIdToGareName(value, gares) }</p>
              //           // <RerArrete key={index} name={gareIdToGareName(value, dataGares)}/> 
              //           //console.log(value) // missing parking like 840, 916
              //   // value.map( (item, index) => (
              //   //   <RerArrete key={index} name={gareIdToGareName(item, dataGares)}/> 
              //   // ))
              // })

              // <RerArrete name={gareIdToGareName(value, dataGares)}/> 

            //   value.map( (item, index) => (
            //     <RerArrete key={index} dataGares={dataGares} name={gareIdToGareName(item, dataGares)}/> 
            //   ))
            // ))
          }
        </div>
        <div className="wrapper--flex">
          <Favorit listFavorit={listFavorit} setListFavorit={setListFavorit} parkings={data}/>
          {/* {console.log(listFavorit)} */}
          <ButtonSeeMore isOpen={isOpen} />
        </div>
      </div>
      <p className="parking--name">Nom du Parking</p>

      <div className="wrapper--flex">
        <div className="parking__options">
          
          <ParkingOptions data={data} name="24"/>
          <ParkingOptions data={data} name="handicape"/>
          <ParkingOptions data={data} name="securite"/>
        </div>
        {isOpen===false?
          <Price data={data}/>
        :""}
      </div>

      <div className="parking__distance">
        <Distance name="jusqu’au rer" value="50m - 3min"/>
        <Distance name="temps de transport jusqu’a l’épreuve" value="20km - 20min"/>
      </div>

      {isOpen===true?
        <ParkingOpend data={data} />
      :""}

    </div>
  );
}

export default Parking;