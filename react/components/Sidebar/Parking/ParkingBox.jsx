import React, { useState,useEffect } from 'react';
import RerArrete from './RerArrete'
import Favorit from './Favorit'
import ParkingOptions from './ParkingOptions'
import Distance from './Distance'
import Price from './Price'
import ButtonSeeMore from './ButtonSeeMoor'
import ParkingOpend from './ParkingOpend'
import gareIdToGareName from '../../../functions/map/gareIdToGareName';







function Parking({data, dataGares}) {
  const [isOpen, setIsOpen] = useState(false);
  //console.log(isOpen);

  const toFalse = ()=> {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    //showParkings({data})
  }, [])

  return (
    <div className="box--parking parking">

      <div className="wrapper--flex">
        <div>
          {/* <h3>Parking-Vincennes Chateau</h3> */}
          <h3>{data.gares_id}</h3>
          {/* {console.log(dataGares.getGaresIdArray)} */}
          {/* <h3>{gareIdToGareName(data.gares_id, dataGares)}</h3> */}
          {/* <h3>{gareIdToGareName(data.gares_id, dataGares)}</h3> */}
          {
            data.gares_id.map((value) =>(
              
              <RerArrete name={gareIdToGareName(value, dataGares)}/> 
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