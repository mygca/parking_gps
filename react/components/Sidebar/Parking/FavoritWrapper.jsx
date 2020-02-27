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


function FavoritWrapper({gareID, setIs24,setIsHandicap,setIsSecurity,is24,isHandicap,isSecurity,minHeight,setMinHeight, sport, lines,listFavorit, setListFavorit, isPrixUp, setIsPrixUp,setIsFirstFav,setPopUpNav,setMoodConnection,isLogin, parentCallback}) {
  const [gares, setGares] = useState(null);
  const [garesIdArray, setgaresIdArray] = useState(null);
  const [parkingsIdArray, setparkingsIdArray] = useState();
  const [matchedId, setMatchedId] = useState();
  const [data, setData] = useState({});
  const [showListFavorit, setShowListFavorit] = useState();

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
      
              
              /**SORT BY PRICE INCREASE */

              sortPrice(isPrixUp, showParkingsBox)

              // console.log('sort', showParkingsBox)

              setData({showParkingsBox})

              
              if ( showParkingsBox != null)
              {
                filterParkingMap({showParkingsBox})
                
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

  // const showListFavorit = () => {
  //   Object.values(parkings).map(p => {

  //     Array.from(new Set(listFavorit)).map((i) => {

  //     })

  //   })
  // }



  useEffect(() => {

    fetchGare();

     
  }, [is24, isHandicap, isSecurity, minHeight, gareID, isPrixUp])




  
  return (
    <div className="wrapper--parking">
        <p>HEllO FAVORIT PAGE</p>
    
        
        {
          
         
          // Object.values(data).map(()=> (
         
          //   data.showParkingsBox.map((e, i)=> (

          //     <ParkingBox key={i} data={e} dataGares={gares} garesLines={garesIdArray.getGaresIdArray} listFavorit={listFavorit} setListFavorit={setListFavorit} is24={is24} isHandicap={isHandicap} isSecurity={isSecurity} setIsFirstFav={setIsFirstFav} setPopUpNav={setPopUpNav} setMoodConnection={setMoodConnection} isLogin={isLogin} /> 
          //   //<p>{e.company}</p>
          //   ))
          // )) 
          // Array.from(new Set(listFavorit))
          //  console.log(Array.from(new Set(listFavorit)))
          // console.log(listFavorit)
          garesIdArray && Object.values(parkings).map(p => {
            //console.log(p.gares_id)
            // for (let i = 0; i < listFavorit.length; i++) {
            //   const element = listFavorit[i];
            //   if (element == p.gares_id) 
            //   {
            //     <ParkingBox key={i} data={p} dataGares={gares} garesLines={garesIdArray.getGaresIdArray} listFavorit={listFavorit} setListFavorit={setListFavorit} is24={is24} isHandicap={isHandicap} isSecurity={isSecurity} setIsFirstFav={setIsFirstFav} setPopUpNav={setPopUpNav} setMoodConnection={setMoodConnection} isLogin={isLogin} 
            //     /> 

            //   }
            // }
            
              Array.from(new Set(listFavorit)).map((i) => {
                  // <ParkingBox data={p} dataGares={gares} garesLines={garesIdArray.getGaresIdArray} listFavorit={listFavorit} setListFavorit={setListFavorit} is24={is24} isHandicap={isHandicap} isSecurity={isSecurity} setIsFirstFav={setIsFirstFav} setPopUpNav={setPopUpNav} setMoodConnection={setMoodConnection} isLogin={isLogin} 
                  // /> 
                  // console.log(p)
                <p>{i}</p>
              })

          })
        }

      
    </div>
  );
}

export default FavoritWrapper;