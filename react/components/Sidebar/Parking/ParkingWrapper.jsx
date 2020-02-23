import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ParkingBox from './ParkingBox';
//import { data } from '../../../../data/parkings';
import parkings from '../../../data/parkings';
import getParkingByLine from '../../../functions/map/getParkingByLine';
//import handleToggleFilter from '../../../functions/map/handleToggleFilter';

import showParkings from '../../../functions/map/showParking';


function ParkingWrapper({gareID, setIs24,setIsHandicap,setIsSecurity,is24,isHandicap,isSecurity,minHeight,setMinHeight, sport, lines}) {
  const [gares, setGares] = useState(null);
  const [garesIdArray, setgaresIdArray] = useState(null);
  const [parkingsIdArray, setparkingsIdArray] = useState();
  const [matchedId, setMatchedId] = useState();
  const [data, setData] = useState({});

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
            //console.log(allGares)
            setGares(allGares)
            //setgaresIdArray(allGares.garesId)
            const getGaresIdArray = [];
            for (const g of allGares) {
            
              getGaresIdArray.push(g.garesId)
            }
            setgaresIdArray({getGaresIdArray})


            const getParkingsIdArray = [];
            //const matchedGareIDArray = [];
            if (parkings != null)
            {
              for (const p of parkings) {
                for (let i = 0; i < (p.gares_id).length; i++) {
                  const parkingGareid = p.gares_id[i];
                  getParkingsIdArray.push(parkingGareid)  
                }
              }
              getParkingsIdArray.map(String)
              setparkingsIdArray({getParkingsIdArray})
      
              const matchedGareIDArray = getParkingsIdArray.filter(element => getGaresIdArray.includes(element)).map(String);
              //console.log(matchedGareIDArray)
              setMatchedId({matchedGareIDArray})



              const showParkingsBox = [];
              for (const parking of parkings) {
                //console.log(parking.company)
                for (let i = 0; i < (parking.gares_id).length; i++) {
                  const parkingBox = parking.gares_id[i].toString();
                  //console.log(parkingBox)
                  //console.log(matchedGareIDArray)
                  if (matchedGareIDArray.includes(parkingBox)) 
                  {
                    showParkingsBox.push(parking)
                  } 
                  
                }
              }
              //console.log(showParkingsBox)
              setData({showParkingsBox})
            }
            else{
              console.log("no parking")
            }
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

            const getGaresIdArray = [];
            for (const g of res.data["hydra:member"]) 
            {
              getGaresIdArray.push(g.garesId)
            }
            setgaresIdArray({getGaresIdArray})

            const getParkingsIdArray = [];
            //const matchedGareIDArray = [];
            if (parkings != null)
            {
              for (const p of parkings) {
                for (let i = 0; i < (p.gares_id).length; i++) {
                  const parkingGareid = p.gares_id[i];
                  getParkingsIdArray.push(parkingGareid)  
                }
              }
              getParkingsIdArray.map(String)
              setparkingsIdArray({getParkingsIdArray})
      
              const matchedGareIDArray = getParkingsIdArray.filter(element => getGaresIdArray.includes(element)).map(String);
              //console.log(matchedGareIDArray)
              setMatchedId({matchedGareIDArray})

              const showParkingsBox = [];
              for (const parking of parkings) {
                //console.log(parking.company)
                for (let i = 0; i < (parking.gares_id).length; i++) {
                  const parkingBox = parking.gares_id[i].toString();
                  //console.log(parkingBox)
                  //console.log(matchedGareIDArray)
                  if (matchedGareIDArray.includes(parkingBox)) 
                  {
                    showParkingsBox.push(parking)
                  } 
                  
                }
              }
              //console.log(showParkingsBox)
              setData({showParkingsBox})
            }
            else{
              console.log("no parking")
            }
          }
        )
    }
  }

  // useEffect(() => {
  //   //setData(showParkingsBox);
  //   //setData(parkings);
  //   displaParkings();
  //   showParkings({data})

  //   fetchGare();
  // }, [])


  //Get GareIDs of all Parkings
  //const garesIdArray = [];
  // if (gares != null){
  //   for (const g of gares) {
  //     console.log(g)
  //     garesIdArray.push(g.garesId)
  //   }
  // }else{
  //   console.log("cqac")
  // }
  // console.log(garesIdArray)


  // const getGaresIdArray = [];
  // if (gares != null)
  // {
  //   for (const g of gares) {
  //     //console.log(g)
  //     getGaresIdArray.push(g.garesId)
  //   }
  // }
  // else
  // {
  //   console.log("cqac")
  // }
  // console.log(getGaresIdArray)


  
  // for (const g of gares) {
  //   console.log(g)
  //   garesIdArray.push(g.garesId)
  // }

  // //Get GareIDs of all displayd gares
  // const parkingsIdArray = [];
  // if (parkings != null){
  //   for (const p of parkings) {
  //     for (let i = 0; i < (p.gares_id).length; i++) {
  //       const parkingGareid = p.gares_id[i];
  //       parkingsIdArray.push(parkingGareid)  
  //     }
  //   }
  //   parkingsIdArray.map(String)
  // }else{
  //   console.log("no parking")
  // }

  // find matched GareIDs
  //const matchedGareIDArray = parkingsIdArray.filter(element => garesIdArray.includes(element)).map(String);
  //console.log(matchedGareIDArray)


  // //display matched gareIDs in carte

  // for (let i = 0; i < matchedGareIDArray.length; i++) {
  //   const matchedGareId = matchedGareIDArray[i];
  //   let elementTest=document.querySelector('[data-station-id="'+matchedGareId+'"]')
  //   elementTest.style.display="block";
  // }

  // display parkings matched
  // const showParkingsBox = [];
  // for (const parking of parkings) {
  //   //console.log(parking.company)
  //   for (let i = 0; i < (parking.gares_id).length; i++) {
  //     const parkingBox = parking.gares_id[i].toString();
  //     //console.log(parkingBox)
  //     if (matchedGareIDArray.includes(parkingBox)) 
  //     {
  //       showParkingsBox.push(parking)
  //     } 
      
  //   }
  // }
  // console.log(showParkingsBox)

   //Get GareIDs of all Parkings
   //console.log(gares)
  //   const allGaresId = async () => {

  //    const getGaresIdArray = [];
  //    console.log(gares)
  //    if (gares)
  //    {
  //      for (const g of gares) {
  //        getGaresIdArray.push(g.garesId)
  //      }
  //      setgaresIdArray({getGaresIdArray})
  //    }
  //    else{
  //      console.log("cqac")
  //    }

  //  }
  // const allGaresId =  () => {
  //   const getGaresIdArray = [];
  //   //console.log(gares)
  //   if (gares != null)
  //   {
  //     for (const g of gares) {
  //       getGaresIdArray.push(g.garesId)
  //     }
  //     //setgaresIdArray({getGaresIdArray})
  //     //getGaresIdArray.map(String)
  //   }
  //   else{
  //     console.log("cqac")
  //   }
  //   const garesIdArrStr = getGaresIdArray.map(String)
  //   const garesIdArrStr2 = [...garesIdArrStr]
  //   console.log(garesIdArrStr2)
  //   //setgaresIdArray({garesIdArrStr2})

  // } 

  // const getGaresIdArray = [];
  // //console.log(gares)
  // if (gares != null)
  // {
  //   for (const g of gares) 
  //   {
  //     getGaresIdArray.push(g.garesId)
  //   }
  //   //setgaresIdArray({getGaresIdArray})
  //   //getGaresIdArray.map(String)
  // }
  // else
  // {
  //   console.log("cqac")
  // }
  // const garesIdArrStr = getGaresIdArray.map(String)
  // const garesIdArrStr2 = [...garesIdArrStr]
  // //console.log(garesIdArrStr)
  // console.log(garesIdArrStr2)




   
  // const allParkingsId = () => {

  //     //Get GareIDs of all displayd gares
  //     const getParkingsIdArray = [];
  //     //const matchedGareIDArray = [];
  //     if (parkings != null)
  //     {
  //       for (const p of parkings) {
  //         for (let i = 0; i < (p.gares_id).length; i++) {
  //           const parkingGareid = p.gares_id[i];
  //           getParkingsIdArray.push(parkingGareid)  
  //         }
  //       }
  //       getParkingsIdArray.map(String)
  //       setparkingsIdArray({getParkingsIdArray})

  //       const matchedGareIDArray = getParkingsIdArray.filter(element => garesIdArray.includes(element)).map(String);
  //       //console.log(matchedGareIDArray)
  //       setMatchedId({matchedGareIDArray})
  //     }
  //     else{
  //       console.log("no parking")
  //     }
      
  // }
   //console.log(parkingsIdArray)


 


   

 
  // const displayParkings = () => {
  //   //console.log(showParkingsBox)
  //     // //Get GareIDs of all Parkings
  //     // const getGaresIdArray = [];
  //     // if (gares != null){
  //     //   for (const g of gares) {
  //     //     getGaresIdArray.push(g.garesId)
  //     //   }
  //     //   setgaresIdArray(getGaresIdArray)
  //     // }else{
  //     //   console.log("cqac")
  //     // }

  //     // //Get GareIDs of all displayd gares
  //     // const getParkingsIdArray = [];
  //     // if (parkings != null){
  //     //   for (const p of parkings) {
  //     //     for (let i = 0; i < (p.gares_id).length; i++) {
  //     //       const parkingGareid = p.gares_id[i];
  //     //       getParkingsIdArray.push(parkingGareid)  
  //     //     }
  //     //   }
  //     //   getParkingsIdArray.map(String)
  //     //   setparkingsIdArray(getParkingsIdArray.map(String))
  //     // }else{
  //     //   console.log("no parking")
  //     // }
  //     // console.log(parkingsIdArray)

  //    const showParkingsBox = [];

  // //   const matchedGareIDArray = parkingsIdArray.filter(element => garesIdArray.includes(element)).map(String);
  // //   console.log(matchedGareIDArray)


  // //    //display matched gareIDs in carte

  // // for (let i = 0; i < matchedGareIDArray.length; i++) {
  // //   const matchedGareId = matchedGareIDArray[i];
  // //   let elementTest=document.querySelector('[data-station-id="'+matchedGareId+'"]')
  // //   elementTest.style.display="block";
  // // }

  //   for (const parking of parkings) {
  //     //console.log(parking.company)
  //     for (let i = 0; i < (parking.gares_id).length; i++) {
  //       const parkingBox = parking.gares_id[i].toString();
  //       //console.log(parkingBox)
  //       //console.log(matchedGareIDArray)
  //       if (matchedGareIDArray.includes(parkingBox)) 
  //       {
  //         showParkingsBox.push(parking)
  //       } 
        
  //     }
  //   }
  //   //console.log(showParkingsBox)
  //   setData({showParkingsBox})
  //   //return showParkingsBox
  // }
  let renderParkings;
  if (data) {
    renderParkings = true
  }
  else
  {
    renderParkings = false
  }

  



  useEffect(() => {
    //setData(showParkingsBox);
    //setData(parkings);
    //setData({showParkingsBox})
    
    //setgaresIdArray({getGaresIdArray})
    fetchGare();
    //allGaresId();
    // setgaresIdArray({getGaresIdArray})
  //   const getGaresIdArray = [];
  // //console.log(gares)
  // if (gares != null)
  // {
  //   for (const g of gares) 
  //   {
  //     getGaresIdArray.push(g.garesId)
  //   }
  //   //setgaresIdArray({getGaresIdArray})
  //   //getGaresIdArray.map(String)
  // }
  // else
  // {
  //   console.log("cqac")
  // }
  // const garesIdArrStr = getGaresIdArray.map(String)
  //const garesIdArrStr2 = [...garesIdArrStr]
  //console.log(garesIdArrStr)
  //console.log(garesIdArrStr2)

    // if (garesIdArrStr2) {

    //   setgaresIdArray({garesIdArrStr})
    // }
    // else {
    //   console.log('woo')
    // }
    
   // const getGaresIdArray = [];
    // if (gares != null) 
    // {
    //   for (const g of gares) {
    //    // console.log(g)
    //    getGaresIdArray.push(g.garesId)
    //   }

    // }
    // console.log(getGaresIdArray)

    //allParkingsId();


    //const showParkingsBox = [];

    // const matchedGareIDArray = parkingsIdArray.filter(element => garesIdArray.includes(element)).map(String);
    // console.log(matchedGareIDArray)
 
 
    //  //display matched gareIDs in carte
 
    // for (let i = 0; i < matchedGareIDArray.length; i++) {
    //   const matchedGareId = matchedGareIDArray[i];
    //   let elementTest=document.querySelector('[data-station-id="'+matchedGareId+'"]')
    //   elementTest.style.display="block";
    // }

    //displayParkings();
    showParkings({data})

    // console.log(parkingsIdArray)
     //console.log(garesIdArray)

     delete data.showParkingsBox
     
  }, [])

  //   const allGaresId =  () => {
  //     const getGaresIdArray = [];
  //     //console.log(gares)
  //     // if (gares != null)
  //     // {
  //       for (const g of gares) {
  //         getGaresIdArray.push(g.garesId)
  //       }
  //       //setgaresIdArray({getGaresIdArray})
  //       //getGaresIdArray.map(String)
  //       const garesIdArrStr = getGaresIdArray.map(String)
  //     const garesIdArrStr2 = [...garesIdArrStr]
  //     console.log(garesIdArrStr)
  //     setgaresIdArray({garesIdArrStr})
  //     //}
  //     // else{
  //     //   console.log("cqac")
  //     // }
  //     // const garesIdArrStr = getGaresIdArray.map(String)
  //     // const garesIdArrStr2 = [...garesIdArrStr]
  //     // console.log(garesIdArrStr2)

  // } 



  
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
{/* 
         {data.map((data, i )=> (

          <ParkingBox key={i} data={data}/>  
            
          )) 
        }  */}
{/* 
        {renderParkings && data.map((data, i )=> (

          <ParkingBox key={i} data={data}/>  
            
          )) 
          
        } */}

        {Array.isArray(data) ? 'array' : 'object'}

        {/* {(Array.from(data)).map((data, i )=> (

          <ParkingBox key={i} data={data}/>  
          
          )) 
        } */}

        {/* {
          (Object.values(data)).forEach(([data]) => {
            //console.log(key); 
            console.log(data.company); 
          // <p>{key}{value.company}</p>
            <ParkingBox data={data}/>  
          })
        } */}
        {/* {
          
          Object.values(data).forEach((key)=> {
          //console.log(data[key][1])
          console.log(data.showParkingsBox)
          
          //<ParkingBox data={data[key]}/>  

          }) 
        } */}
        {
          
          Object.values(data).map(()=> (
          //console.log(data[key][1])
            // data.showParkingsBox.forEach(e => {
            //   //console.log(e)
            //   // <ParkingBox data={{e}}/> 
            // <p>{e.company}</p>
            // })
            data.showParkingsBox.map(e => (
              //console.log(e)
              <ParkingBox data={e}/> 
            //<p>{e.company}</p>
            ))
          
          // <ParkingBox data={data.showParkingsBox}/>  

          )) 
        }
        {/* {
          Object.values(data).map(([data]) => (
            //console.log(key); 
            //console.log(data.company); 
          // <p>{key}{value.company}</p>
            <ParkingBox data={data}/>  
          ))
        }
         */}

      
    </div>
  );
}

export default ParkingWrapper;