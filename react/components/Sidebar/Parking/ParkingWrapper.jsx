import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ParkingBox from './ParkingBox';
//import { data } from '../../../../data/parkings';
import parkings from '../../../data/parkings';
import getParkingByLine from '../../../functions/map/getParkingByLine';
//import handleToggleFilter from '../../../functions/map/handleToggleFilter';

import showParkings from '../../../functions/map/showParking';
import filterParkingsOptions from '../../../functions/map/filterParkingsOptions';
import filterParkingMap from '../../../functions/map/filterParkingMap';
import sortPrice from '../../../functions/sortPrice';


function ParkingWrapper({gareID, setIs24,setIsHandicap,setIsSecurity,is24,isHandicap,isSecurity,minHeight,setMinHeight, sport, lines,listFavorit, setListFavorit, isPrixUp, setIsPrixUp,setIsFirstFav,setPopUpNav,setMoodConnection,isLogin}) {
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

  /**
   * 
   */
  
  /**
   * Fetch Data about Gares by line (sport) picked
   * and format this data to use it in many different array
   * - gares : all gares by lien (sport)
   * - garesIdArray : all gares_id from gares
   * - parkingsIdArray : all parkings_id from gares
   * - matchedId : parking_id that match garesIdArray (gares where there's parking)
   *
   */
  const fetchGare = () => {
  // const rer = ['a', 'b', 'c', 'd'];
  const linesJO = ['a', 'b', 'c', 'd', 'j', 'n', 'p'];
  //const train = ['j', 'n', 'p'];
  const Line = [];

  /** TWO LINES SELECTED */
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

            
            /**
             * Fetch Data parkings_id
             */

            const getParkingsIdArray = [];
            //const matchedGareIDArray = [];
            if (parkings != null || gares !=null)
            {
              //Array du gares sur la carte
              let allGareIds = document.querySelectorAll('[data-station-id]');
              let listGareIds = [];
              for (let i = 0; i < allGareIds.length; i++) {
                let listGareIdElement =allGareIds[i].getAttribute("data-station-id")
                listGareIds.push(listGareIdElement);
              }

              //console.log(listGareIds)

              //Array du parkings sur la line
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

              // setTimeout(() => {
              //   console.log("what match!!!!!")
              //   console.log(matchedGareIDArray.length);
              //   for (let i = 0; i < matchedGareIDArray.length; i++) {
              //     const matchedGareId = matchedGareIDArray[i];

              //     let elementTest=document.querySelector('[data-station-id="'+matchedGareId+'"]')
              //     console.log(elementTest);
              //     elementTest.style.display="block";
              //   }
              // }, 100);


            /**
             * Data parkings
             * filter by is24, isHandicap, isSecurity
             */


              let showParkingsBox = [];
              for (const parking of parkings) {
                //console.log(parking.company)
                for (let i = 0; i < (parking.gares_id).length; i++) {
                  const parkingBox = parking.gares_id[i].toString();
                  //console.log(parkingBox)
                  //console.log(matchedGareIDArray)
                  if (matchedGareIDArray.includes(parkingBox)) 
                  {
                    showParkingsBox.push(parking)
                    // if ( showParkingsBox != null)
                    // {
                    //   filterParkingsOptions(is24, isHandicap, isSecurity, {showParkingsBox}, setData)

                    // }

                    // if (is24)
                    // {
                    //   //console.log('filter 24h on')
                    //   //console.log({showParkingsBox})
                    //   showParkingsBox = showParkingsBox.filter( parkingH24 => parkingH24.h24 == true )
                    //   //setData({parkingsH24})
                    // }
                    // if (isHandicap)
                    // {
                    //   //console.log('filter 24h on')
                    //   //console.log({showParkingsBox})
                    //   showParkingsBox = showParkingsBox.filter( parkingH => parkingH.handicape == true )
                    //   //setData({parkingsH24})
                    // }
                    // if (isSecurity)
                    // {
                    //   //console.log('filter 24h on')
                    //   //console.log({showParkingsBox})
                    //   showParkingsBox = showParkingsBox.filter( parkingS => parkingS.camera == true )
                    //   //setData({parkingsH24})
                    // }
                  } 
                  
                }
              }
              //console.log(showParkingsBox)
              // filterParkingsOptions(is24, isHandicap, isSecurity, {data}, setData)
              
              /**SORT BY PRICE INCREASE */

              sortPrice(isPrixUp, showParkingsBox)

              // console.log('sort', showParkingsBox)

              setData({showParkingsBox})

              //  setTimeout(() => {
                // console.log("what match!!!!!")
                // console.log(showParkingsBox.length);

                // let circles = document.querySelectorAll("circle");
                // for (let i = 0; i < circles.length; i++) {
                //   circles[i].style.display="none";
                // }

                // let matchedGares =[];
                // for (let i = 0; i < showParkingsBox.length; i++) {
                //   //console.log(i);
                //   let matchedGareId = showParkingsBox[i];
                //   if(matchedGares.indexOf(matchedGareId)===-1){
                //     matchedGares.push(matchedGareId.gares_id)
                //     console.log("new")
                //   }
                // }
                // console.log("filtered Array "+matchedGares)
                // let mattchedArray= matchedGares.flat().map(String)
                // //console.log(mattchedArray);

                

                //   for (let i = 0; i < mattchedArray.length; i++) {

                  
                //     const mgi = matchedGareIDArray[i];
                //     if (mgi != null) {
                      
    
                //       let elementTest=document.querySelector('[data-station-id="'+mgi+'"]')
                //       //console.log(elementTest);
                //       console.log(elementTest);
                //       if (elementTest != null) {
                //         elementTest.style.display="block";
                //         elementTest.style.fill="red";
                //       }
                      
                //     }
                //   }
                



              // }, 100);

              if ( showParkingsBox != null)
              {
                filterParkingMap({showParkingsBox})
                //filterParkingsOptions(is24, isHandicap, isSecurity, {showParkingsBox}, setData)
                //console.log(showParkingsBox)

                /**FILTER BY GARE ID */
                // if (gareID) {
                //   //showParkingsBox = showParkingsBox.filter( p => p.gares_id == gareID)
                //   console.log ('filter gareid man')
                //   showParkingsBox = showParkingsBox.filter( parking => {
        
                //     console.log(parking.gares_id)
                
                //     for (let index = 0; index < parking.gares_id.length; index++) {
                //       const element = parking.gares_id[index];

                //       if ( element == gareID )
                //       {
                //         return parking
                //       }
                      
                //     }
                //   })
                //   filterParkingMap({showParkingsBox});
                //   setData({showParkingsBox}); 
                // }
                //filterParkingGareID({showParkingsBox, gareID})

                if (gareID) 
                {
                  console.log("baba o")
                  showParkingsBox = showParkingsBox.filter( parking => {
                  var gareIdSelected;
                    //console.log(parking.gares_id)
                
                    for (let index = 0; index < parking.gares_id.length; index++) {
                      const element = parking.gares_id[index];

                      if ( element == gareID )
                      {
                        gareIdSelected = element;
                        return parking
                      }
                      
                    }
                  })
                  console.log("nb show parking " + showParkingsBox)
                  setData({showParkingsBox}); 
                  console.log("nb show parking after setting" + showParkingsBox)
                  filterParkingMap({showParkingsBox});

                /// Filter by parking options
                  if ( is24 && !isHandicap && !isSecurity && !minHeight )
                  {
                    
                    showParkingsBox = showParkingsBox.filter( parkingH24 => parkingH24.h24 == true && parkingH24.gares_id == gareIdSelected )
                    
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox}); 
                  }
                  else if (!is24 && isHandicap && !isSecurity && !minHeight) 
                  {
                    //filterParkingGareID({showParkingsBox, gareID})
                    showParkingsBox = showParkingsBox.filter( parkingH => parkingH.handicape == true && parkingH.gares_id == gareIdSelected  )
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && !isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( parkingSecure => parkingSecure.camera == true && parkingSecure.gares_id == gareIdSelected )
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && !isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( parkingHeight => parkingHeight.hauteur_maximum >= minHeight && parkingHeight.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && !isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && !isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.camera == true && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && !isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.handicape == true && p.camera == true && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.handicape == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && !isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.camera == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.camera == true && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.handicape == true && p.camera == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && !isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.camera == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.camera == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else 
                  {
                    return
                  }
                } 
                else 
                {
                  if ( is24 && !isHandicap && !isSecurity && !minHeight)
                  {
                    filterParkingGareID({showParkingsBox, gareID})
                    showParkingsBox = showParkingsBox.filter( parkingH24 => parkingH24.h24 == true )
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox}); 
                  }
                  else if (!is24 && isHandicap && !isSecurity && !minHeight) 
                  {
                    filterParkingGareID({showParkingsBox, gareID})
                    showParkingsBox = showParkingsBox.filter( parkingH => parkingH.handicape == true )
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && !isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( parkingSecure => parkingSecure.camera == true )
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && !isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( parkingHeight => parkingHeight.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && !isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && !isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.camera == true )
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && !isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.handicape == true && p.camera == true)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.handicape == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && !isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.camera == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.camera == true)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.handicape == true && p.camera == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && !isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.camera == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.camera == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else 
                  {
                    return
                  }
                }

                //setData({showParkingsBox})
              }
            }
            else{
              console.log("no parking")
            }
          })
        );

    } 
    /** ONE LINE SELECTED */
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
                  //console.log("874 check "+p.gares_id[i])
                  //encore la
                  const parkingGareid = p.gares_id[i];
                  getParkingsIdArray.push(parkingGareid)  
                }
              }
              getParkingsIdArray.map(String)
              setparkingsIdArray({getParkingsIdArray})
      
              const matchedGareIDArray = getParkingsIdArray.filter(element => getGaresIdArray.includes(element)).map(String);
              console.log("check 874 "+matchedGareIDArray)
              setMatchedId({matchedGareIDArray})


                // setTimeout(() => {
                // for (let i = 0; i < matchedGareIDArray.length; i++) {
                //   const matchedGareId = matchedGareIDArray[i];
                //   let elementTest=document.querySelector('[data-station-id="'+matchedGareId+'"]')
                //   elementTest.style.display="block";
                // }
                // }, 100);

              let showParkingsBox = [];
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

              /** SORT BY PRICE INCREASE */
              sortPrice(isPrixUp, showParkingsBox)
              //console.log('sort', showParkingsBox)

              setData({showParkingsBox})

              if ( showParkingsBox != null)
              {
                //filterParkingsOptions(is24, isHandicap, isSecurity, {showParkingsBox}, setData)

                if (gareID) {
                  console.log("baba o")
                  showParkingsBox = showParkingsBox.filter( parking => {
                  var gareIdSelected;
                    //console.log(parking.gares_id)
                
                    for (let index = 0; index < parking.gares_id.length; index++) {
                      const element = parking.gares_id[index];

                      if ( element == gareID )
                      {
                        gareIdSelected = element;
                        return parking
                      }
                      
                    }
                  })
                  console.log("nb show parking " + showParkingsBox)
                  setData({showParkingsBox}); 
                  console.log("nb show parking after setting" + showParkingsBox)
                  filterParkingMap({showParkingsBox});

                /// Filter by parking options
                  if ( is24 && !isHandicap && !isSecurity && !minHeight )
                  {
                    
                    showParkingsBox = showParkingsBox.filter( parkingH24 => parkingH24.h24 == true && parkingH24.gares_id == gareIdSelected )
                    
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox}); 
                  }
                  else if (!is24 && isHandicap && !isSecurity && !minHeight) 
                  {
                    //filterParkingGareID({showParkingsBox, gareID})
                    showParkingsBox = showParkingsBox.filter( parkingH => parkingH.handicape == true && parkingH.gares_id == gareIdSelected  )
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && !isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( parkingSecure => parkingSecure.camera == true && parkingSecure.gares_id == gareIdSelected )
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && !isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( parkingHeight => parkingHeight.hauteur_maximum >= minHeight && parkingHeight.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && !isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && !isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.camera == true && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && !isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.handicape == true && p.camera == true && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.handicape == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && !isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.camera == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.camera == true && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.handicape == true && p.camera == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && !isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.camera == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.camera == true && p.hauteur_maximum >= minHeight && p.gares_id == gareIdSelected)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else 
                  {
                    return
                  }
                } 
                else 
                {
                  if ( is24 && !isHandicap && !isSecurity && !minHeight)
                  {
                    filterParkingGareID({showParkingsBox, gareID})
                    showParkingsBox = showParkingsBox.filter( parkingH24 => parkingH24.h24 == true )
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox}); 
                  }
                  else if (!is24 && isHandicap && !isSecurity && !minHeight) 
                  {
                    filterParkingGareID({showParkingsBox, gareID})
                    showParkingsBox = showParkingsBox.filter( parkingH => parkingH.handicape == true )
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && !isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( parkingSecure => parkingSecure.camera == true )
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && !isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( parkingHeight => parkingHeight.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && !isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && !isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.camera == true )
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && !isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.handicape == true && p.camera == true)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.handicape == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && !isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.camera == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && isSecurity && !minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.camera == true)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && !isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (!is24 && isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.handicape == true && p.camera == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && !isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.camera == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else if (is24 && isHandicap && isSecurity && minHeight) 
                  {
                    showParkingsBox = showParkingsBox.filter( p => p.h24 == true && p.handicape == true && p.camera == true && p.hauteur_maximum >= minHeight)
                    setData({showParkingsBox}); filterParkingMap({showParkingsBox})
                  }
                  else 
                  {
                    return
                  }
                }
              }
            }
            else{
              console.log("no parking")
            }
          }
        )
    }
  }

  // let renderParkings;
  // if (data) {
  //   renderParkings = true
  // }
  // else
  // {
  //   renderParkings = false
  // }


  useEffect(() => {

    fetchGare();
    //filterParkingMap();

    //showParkings({data})

    //delete data.showParkingsBox



    //filterParkingsOptions();
     
  }, [is24, isHandicap, isSecurity, minHeight, gareID, isPrixUp])




  
  return (
    <div className="wrapper--parking">
  
        {/* <p>C'est le gareid :{gareID}</p> */}
          <p>{is24}</p>
        
        {
          
          // Object.values(data).map(()=> (
          // //console.log(data[key][1])
          //   // data.showParkingsBox.forEach(e => {
          //   //   //console.log(e)
          //   //   // <ParkingBox data={{e}}/> 
          //   // <p>{e.company}</p>
          //   // })
          //   data.showParkingsBox.map((e, i)=> (
          //     //console.log(e)
          //     // <ParkingBox data={e} dataGares={gares} garesLines={garesIdArray.getGaresIdArray.map(String)}/> 
          //     <ParkingBox key={i} data={e} dataGares={gares} garesLines={garesIdArray.getGaresIdArray} listFavorit={listFavorit} setListFavorit={setListFavorit}/> 
          //   //<p>{e.company}</p>
          //   ))
          // )) 
          Object.values(data).map(()=> (
          //console.log(data[key][1])
            // data.showParkingsBox.forEach(e => {
            //   //console.log(e)
            //   // <ParkingBox data={{e}}/> 
            // <p>{e.company}</p>
            // })
            data.showParkingsBox.map((e, i)=> (
              //console.log(e)
              // <ParkingBox data={e} dataGares={gares} garesLines={garesIdArray.getGaresIdArray.map(String)}/> 
              <ParkingBox key={i} data={e} dataGares={gares} garesLines={garesIdArray.getGaresIdArray} listFavorit={listFavorit} setListFavorit={setListFavorit} is24={is24} isHandicap={isHandicap} isSecurity={isSecurity} setIsFirstFav={setIsFirstFav} setPopUpNav={setPopUpNav} setMoodConnection={setMoodConnection} isLogin={isLogin} /> 
            //<p>{e.company}</p>
            ))
          )) 

        }

      
    </div>
  );
}

export default ParkingWrapper;