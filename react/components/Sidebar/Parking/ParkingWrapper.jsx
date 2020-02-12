import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ParkingBox from './ParkingBox';

function ParkingPreviewWrapper() {
  const [data, setData] = useState([]);

  useEffect(()=> {

    const fetchData = async () => {
      const result = await axios.get(
        '/api/parkings',
      );
      // console.log(result);
      // console.log(result.data);
      //console.log(result.data["hydra:member"][0].ParkName);
      //setData(result.data);
      setData(result.data["hydra:member"]);
      //console.log(result.data["hydra:member"][0].ParkName)

    }
    
    fetchData();
    
  }, []);

  
  return (
    <div className="wrapper--parking">
      <ParkingBox />
      {/* <p>Hello Data!</p> 
            { console.log(data) 
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
            </ul>
 */} 

      
    </div>
  );
}

export default ParkingPreviewWrapper;