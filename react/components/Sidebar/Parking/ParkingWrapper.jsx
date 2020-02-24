import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ParkingBox from './ParkingBox';
//import { data } from '../../../../data/parkings';
import parkings from '../../../data/parkings';
import getParkingByLine from '../../../functions/map/getParkingByLine';
//import handleToggleFilter from '../../../functions/map/handleToggleFilter';

import showParkings from '../../../functions/map/showParking';


function ParkingWrapper({gareID, setIs24,setIsHandicap,setIsSecurity,is24,isHandicap,isSecurity,minHeight,setMinHeight, sport, lines}) {
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
    if ((lines).length > 1) 
    { 
      //const lines = (lines).length;
      
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
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
          `/api/gares_i_d_fs?indice_ligne=${lines}`,
        )
        .then((res) => {
            //console.log(res.data["hydra:member"])
            setGares(res.data["hydra:member"])
          }
        )
    }
  }

  useEffect(() => {
    setData(parkings);
    showParkings({data})

    fetchGare();
  }, [])


  //Get GareIDs of all Parkings
  const garesIdArray = [];
  if (gares != null){
    for (const g of gares) {
      garesIdArray.push(g.garesId)
    }
  }else{
    console.log("cqac")
  }

  //Get GareIDs of all displayd gares
  const parkingsIdArray = [];
  if (parkings != null){
    for (const p of parkings) {
      for (let i = 0; i < (p.gares_id).length; i++) {
        const parkingGareid = p.gares_id[i];
        parkingsIdArray.push(parkingGareid)  
      }
    }
    parkingsIdArray.map(String)
  }else{
    console.log("no parking")
  }

  // find matched GareIDs
  const matchedGareIDArray = parkingsIdArray.filter(element => garesIdArray.includes(element));
  console.log(matchedGareIDArray)


  //display matched gareIDs in carte

  setTimeout(() => {
  for (let i = 0; i < matchedGareIDArray.length; i++) {
    const matchedGareId = matchedGareIDArray[i];
    let elementTest=document.querySelector('[data-station-id="'+matchedGareId+'"]')
    elementTest.style.display="block";
  }
  }, 100);

  


  
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
          {/* <p>{(lines).length}</p> */}
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