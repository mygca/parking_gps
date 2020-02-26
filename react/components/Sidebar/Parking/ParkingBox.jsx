import React, { useState,useEffect } from 'react';
import RerArrete from './RerArrete'
import Favorit from './Favorit'
import ParkingOptions from './ParkingOptions'
import Distance from './Distance'
import Price from './Price'
import ButtonSeeMore from './ButtonSeeMoor'
import ParkingOpend from './ParkingOpend'
import gareIdToGareName from '../../../functions/map/gareIdToGareName';







function Parking({data, dataGares, garesLines,listFavorit, setListFavorit, gareId}) {
  const [isOpen, setIsOpen] = useState(false);
  const [garesIdInLines, setgaresIdInLines] = useState(null);
  //console.log(isOpen);
  console.log('how many parkings shown?')

  const toFalse = ()=> {
    setIsOpen(!isOpen);
  }

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

  }, [])

  return (
    <div className="box--parking parking">
      <p>{data.gares_id}</p>
      <div className="wrapper--flex">
        <div>
          { 
            garesIdInLines && Object.values(garesIdInLines).map( value => (

              value.map( (item, index) => (
                <RerArrete key={index} dataGares={dataGares} name={gareIdToGareName(item, dataGares)}/> 
              ))
            ))
          }
        </div>
        <div className="wrapper--flex">
          <Favorit listFavorit={listFavorit} setListFavorit={setListFavorit} />
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