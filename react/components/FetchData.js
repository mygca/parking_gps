import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//import './App.scss';

const FectchData = () => {
  const [data, setData] = useState([]);

  // useEffect(async () => {
  //   const result = await axios(
  //     'https://localhost:8000/api/parking_lists',
  //   );
  //   setData(result.data);
    
  // }, []);

  useEffect(()=> {

    const fetchData = async () => {
      const result = await axios.get(
        '/api/parking_lists',
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

  // useEffect(() => {
  //   async function result() {
  //     // You can await here
  //     const response = await axios('https://localhost:8000/api/parking_lists');
  //     // ...
  //     setData(result.data);
  //   }
  //   //fetchData();
  // }, []);


    return (
        <div className="App">
            <p>Hello Data!</p> 
            { console.log(data) 
            /*{ console.log(data["hydra:member"][0].ParkName) } */}
            <ul>
              {
                // data.parkings.map(parking => (
                //   <li key={parking.id}>
                //     <p>{parking.ParkName}</p>
                //   </li>
                //   )
                // )
                data.map(parking => (
                  <li key={parking.id}>
                    <p>{parking.ParkName}</p>
                  </li>
                  )
                )
              }
            </ul>
        </div>
    );
}

export default FectchData;