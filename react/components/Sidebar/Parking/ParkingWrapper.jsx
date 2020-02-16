import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ParkingBox from './ParkingBox';
//import { data } from '../../../../data/parkings';
import parkings from '../../../data/parkings';
//import handleToggleFilter from '../../../functions/map/handleToggleFilter';

function ParkingWrapper({gareID, setIs24,setIsHandicap,setIsSecurity,is24,isHandicap,isSecurity,minHeight,setMinHeight}) {
  const [data, setData] = useState([]);
  const garesUrlTrain = '/api/gares_i_d_fs?reseau=train';
  const garesUrlRer = '/api/gares_i_d_fs?reseau=rer';
  const requestTrain = axios.get(garesUrlTrain);
  const requestRer = axios.get(garesUrlRer);

  // const LineGroup = {
  //   a: ['b', 'p'],
  //   b: ['c', 'p'],
  // }

  // const Loop = () => {
  //   for (const [key, value] of Object.values(LineGroup)) {
  //     console.log(key, value)
  //   }
  // }

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

  // const fetchGare = asynch () => {
  //   const result = await axios.get(
  //     '/api//api/gares_i_d_fs?reseau=RER'
  //   );
  //   console.log(result);
  // }

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


  // const handleToggleFilter = (is24) => {
  //   if ( is24 ) {
  //     console.log('loki')
  //   }
  // }


  useEffect(() => {

      // const fetchGare = async () => {
      //   const result = await axios.get(
      //   '/api/gares_i_d_fs?reseau=train',
      //  );
      const fetchGare = async () => {
        const result = await axios
                .all(
                      [requestTrain, requestRer]
                );
                // .then(
                //   axios.spread((...responses) => {
                //     const responseOne = responses[0];
                //     const responseTwo = responses[1];

                //     // use/access the results
                //     // console.log(responseOne, responseTwo);
                //     //result = responses;
                //     //console.log(responses);
                //   }),
                //   //result = responses

                // );
      
      // console.log(result.data["hydra:member"]);
      //  console.log(result);
      //  var k = typeof result;
      //  console.log(k);
      //console.log(responses);
      }
    //handleToggleFilter();
    //handleToggleFilter();

    // if (is24) {
    //   console.log('ezi')
    // }

    setData(parkings);
    //Loop()
    fetchGare();
  }, [])
  
  //handleToggleFilter();

  
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
        <p>C'est le gareid :{gareID}</p>
          <p>{is24}</p>
        
         

        {data.map(data => (

          <ParkingBox data={data}/>  
            
          )) 
        }
 

      
    </div>
  );
}

export default ParkingWrapper;