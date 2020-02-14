import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ParkingBox from './ParkingBox';
//import { data } from '../../../../data/parkings';
import parkings from '../../../data/parkings';

function ParkingPreviewWrapper() {
  const [data, setData] = useState([]);

  // useEffect(()=> {

  //   const fetchData = async () => {
  //     const result = await axios.get(
  //       '/api/parkings',
  //     );
  //     // console.log(result);
  //     // console.log(result.data);
  //     //console.log(result.data["hydra:member"][0].ParkName);
  //     //setData(result.data);
  //     setData(result.data["hydra:member"]);
  //     //console.log(result.data["hydra:member"][0].ParkName)

  //   }
    
  //   fetchData();
    
  // }, []);

  // useEffect(()=>{

  //   // const fetchData = async () => {
  //   //   const result = await axios.get(
  //   //     '../../../../data/parkings.js',
  //   //     );
  //   //   setData(result.data);
  //   //   }


  //   fetch('../../../../data/parkings.js')
  //     .then( response => response.json )
  //     .then( setData(response.json) );

  // }, [])

  useEffect(() => {
    setData(parkings)
  }, [])
  

  
  return (
    <div className="wrapper--parking">
      {/* <ParkingBox /> */}
      {/*
             console.log(data) 
            /*{ console.log(data["hydra:member"][0].ParkName) } */}
            {/* <ul>
              {
                data.map(parking => (
                  <li key={parking.id}>
                    <p>{parking.ParkName}</p>
                  </li>
                  )
                )
              }
            </ul> */}

        {data.map(data => (

          <ParkingBox data={data}/>  
            
          )) 
        }
 

      
    </div>
  );
}

export default ParkingPreviewWrapper;