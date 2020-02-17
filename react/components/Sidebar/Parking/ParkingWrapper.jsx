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
  // const garesUrlTrain = '/api/gares_i_d_fs?reseau=train';
  // const garesUrlRer = '/api/gares_i_d_fs?reseau=rer';
  // const requestTrain = axios.get(garesUrlTrain);
  // const requestRer = axios.get(garesUrlRer);

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

  // const parkingsPerLine = getParkingByLine(sport.line, parkings);
  // console.log(parkingsPerLine);
  
  const filterGare = (garesidf) => {
    let arrayGares = [];

    garesidf.forEach(element => {
      element.indiceLigne
    });
    return value == "C"
  }

  //console.log(data);

  // if ((sport.lines).length > 1) 
  // {
  //   console.log('heu')
  // }
  //console.log(gares);


  
  
  useEffect(() => {
    // if(!gares) {
    //   const garesUrlTrain = '/api/gares_i_d_fs?reseau=train';
    //   const garesUrlRer = '/api/gares_i_d_fs?reseau=rer';
    //   //const requestTrain = await axios.get(garesUrlTrain);
    //   //const requestRer = await axios.get(garesUrlRer);
    //   axios
    //           .all(
    //             // [requestTrain, requestRer]
    //             [axios.get(garesUrlTrain), axios.get(garesUrlRer)]
    //           )
    //           .then(
    //             //axios.spread((...responses) => {
    //               // const responseOne = responses[0].data["hydra:member"];
    //               // const responseTwo = responses[1].data["hydra:member"];
    //               // const allGares = [...responseOne, ...responseTwo];
  
    //               axios.spread((...responses) => {
    //                 const r = responses[0].data;
    //                 const p = responses[1].data;
    //                 //let res = {...r, ...p};
    //                 // const res = responses[0].data["hydra:member"];
    //                 // res.prod = responses[1].data["hydra:member"];


    //                 let res = Object.assign({}, r, p);
                    
    //                 //console.log(p)
    //                 //console.log(r)
    //                 console.log(res)
    //                 setGares(res)
  
    //               //console.log(allGares)
  
    //               //var l = typeof allGares;
    //               //console.log(l);
    //               //setGares(allGares.data["hydra:member"])
    //               //console.log(gares);
    //             })
    //           );
  
    // }

    
    

  
    const fetchGare = async (l1, l2) => {
    const rer = ['a', 'b', 'c', 'd'];
    const train = ['j', 'n', 'p'];
    const pathLine = [];
      if ((sport.lines).length > 1) 
      { 
        //const lines = (sport.lines).length;
        
        for (let i = 0; i < (sport.lines).length; i++) {
          const l = sport.lines[i];
          //console.log(l)
          if (rer.includes(l)) {
            //l1 = `rer%20`;
            pathLine.push(`rer%20${l}`)
          } else {
            pathLine.push(`ligne%20${l}`)
          }
          
        }
       //console.log(pathLine);
      //  l1 = sport.lines[0];
      //  console.log(l1);
      //  l2 = sport.lines[1];
       const garesUrlTrain = `/api/gares_i_d_fs?ligne=${pathLine[0]}`;
       const garesUrlRer = `/api/gares_i_d_fs?ligne=${pathLine[1]}`; 
      //  const garesUrlTrain = `/api/gares_i_d_fs?ligne=rer%20${l1}`;
      //  const garesUrlRer = `/api/gares_i_d_fs?ligne=ligne%20${l2}`; 
       //const requestTrain = await axios.get(garesUrlTrain);
       //const requestRer = await axios.get(garesUrlRer);
       //if (!gares) {
   
         await axios
           .all(
             // [requestTrain, requestRer]
             [axios.get(garesUrlTrain), axios.get(garesUrlRer)]
           )
           .then(
             axios.spread((...responses) => {
               const responseOne = responses[0].data["hydra:member"];
               const responseTwo = responses[1].data["hydra:member"];
               //const r = responses[0].data;
               //const p = responses[1].data;
               // let res = Object.assign({}, r, p);
               //let res = Object.assign({}, r, p);
               //let res = {...r, ...p};
               // const res = responses[0].data;
               // res.prod = responses[1].data;
               // const res = responses[0].data["hydra:member"];
               // res.prod = responses[1].data["hydra:member"];
               // console.log(res["hydra:member"][0].reseau)
               // console.log(res.prod["hydra:member"][0].reseau)
               //console.log(res)
               //setGares(res)
               //console.log(responseOne[0].reseau);
               let allGares = [...responseOne, ...responseTwo];
 
 
   
               // use/access the results
               // console.log(responseOne, responseTwo);
               //result = responses;
               //console.log(responses);
               //console.log(responseOne);
               //console.log(responseTwo);
               // console.log(responseTwo.data["hydra:member"]);
               console.log(allGares[0])
               //console.log(responses)
               //var l = typeof allGares;
               //console.log(l);
               setGares(allGares)
               //let result;
               //setGares(responses)
               //console.log(gares);
               //console.log(responses[0].data["hydra:member"][0].indiceLigne);
             })
             //result = responses
             //console.log(gares)
             //console.log(responses[0].data["hydra:member"][0].indiceLigne)
           );
       //}
     
     // console.log(result.data["hydra:member"]);
     // console.log(result);
     // var k = typeof result;
     // console.log(k);
     // //console.log(responses);
     // setGares(result);
     // console.log(gares);
     //console.log(gares);
      } else {
        console.log('na')
      }
    }

      // const fetchGare = async () => {
      //   const result = await axios.get(
      //   '/api/gares_i_d_fs?reseau=train',
      //  );
      



    //handleToggleFilter();
    //handleToggleFilter();

    // if (is24) {
    //   console.log('ezi')
    // }
    
    //console.log(gares);
    //setGares(allGares);
    setData(parkings);
    //Loop()
    fetchGare();
    //setGares(fetchGare);
    //console.log(gares);
    //console.log(responses);
  }, [])
  console.log(gares);
  //console.log(gares[0].reseau);
  //console.log(gares[0]);
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