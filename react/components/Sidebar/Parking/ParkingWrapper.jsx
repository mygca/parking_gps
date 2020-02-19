import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ParkingBox from './ParkingBox';
//import { data } from '../../../../data/parkings';
import parkings from '../../../data/parkings';
import getParkingByLine from '../../../functions/map/getParkingByLine';
//import handleToggleFilter from '../../../functions/map/handleToggleFilter';

function ParkingWrapper({gareID, setIs24,setIsHandicap,setIsSecurity,is24,isHandicap,isSecurity,minHeight,setMinHeight, sport}) {
  const [data, setData] = useState([]);
  const [gares, setGares] = useState(null);

  /*
  * Data fetch parkings from API
  */

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

  //console.log(parkings);
  // var z = typeof parkings;
  // console.log(z);

  //getParkingByLine(gares);

  //console.log(gares)

  // for (const p of gares) {
  //   //console.log(p.company)
  //   console.log(p.garesId)
  // }



  

  
  const fetchGare = () => {
  // const rer = ['a', 'b', 'c', 'd'];
  const linesJO = ['a', 'b', 'c', 'd', 'j', 'n', 'p'];
  //const train = ['j', 'n', 'p'];
  const Line = [];
    if ((sport.lines).length > 1) 
    { 
      //const lines = (sport.lines).length;
      
      for (let i = 0; i < (sport.lines).length; i++) {
        const l = sport.lines[i];
        //console.log(l)
        if (linesJO.includes(l)) {
          //l1 = `rer%20`;
          Line.push(l)
        } 
        else {
          //pathLine.push(l)
          console.log(`La ligne ${l} ne dessert pas les JO`)
        }
        
      }

     const garesUrlLine1 = `/api/gares_i_d_fs?indice_ligne=${Line[0]}`;
     const garesUrlLine2 = `/api/gares_i_d_fs?indice_ligne=${Line[1]}`; 
   
 
      axios
        .all(
          // [requestTrain, requestRer]
          [axios.get(garesUrlLine1), axios.get(garesUrlLine2)]
        )
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0].data["hydra:member"];
            const responseTwo = responses[1].data["hydra:member"];
            let allGares = [...responseOne, ...responseTwo];

            //console.log(allGares[0])
            setGares(allGares)

          })
        );

    } 
    else 
    {
      console.log('na')
      axios
        .get(
          `/api/gares_i_d_fs?indice_ligne=${sport.lines}`,
        )
        .then((res) => {
            //console.log(res.data["hydra:member"])
            setGares(res.data["hydra:member"])
          }
        )
    }
  }

  useEffect(() => {

    fetchGare();
    setData(parkings);
    //getParkingByLine(gares);
 
  }, [])
  console.log(gares);
  getParkingByLine(gares, parkings);
  //console.log(getParkingByLine(gares, parkings))
  //console.log(gares[0].garesId);
  // var t = Object.values(gares)
  // console.log(t)

  // for (const p of gares) {
  //   //console.log(p.company)
  //   console.log(p.garesId)
  // }
  // const parkingsByLine = [];
  // for (const p of parkings) {
  //   for (let i = 0; i < (p.gares_id).length; i++) {
  //     const parkingGareid = p.gares_id[i];
  //     if (gares.includes(parkingGareid))
  //     {
  //       parkingsByLine.push(p)
  //     }
      
  //   }
  // }
  // console.log(parkingsByLine)

  
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
          <p>{(sport.lines).length}</p>
          {/* <p>{gares[0].reseau}</p> */}
        
          {/* {gares.map(data => (

              <ParkingBox data={data}/>  
            
            )) 
          } */}

          {/* {gares.map(gare =>(
            <p>{gare.reseau}</p>
          ))} */}

         {data.map((data, i )=> (

          <ParkingBox key={i} data={data}/>  
            
          )) 
        } 
 

      
    </div>
  );
}

export default ParkingWrapper;