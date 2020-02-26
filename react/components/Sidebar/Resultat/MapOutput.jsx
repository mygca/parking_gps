import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterBox from './FilterBox';
import ParkingOutput from './ParkingOutput';
import Popup from '../../Map/Popup';
// import ButtonClose from '../../Global/ButtonClose';
import GareIDSelected from '../Resultat/Filter/GareIDSelected';
import gareIdToGareName from '../../../functions/map/gareIdToGareName';

import getGareId from '../../../functions/map/getGareId';

// import {STATIONS} from '../../../data/stations'

function MapOutput({sport, lines,isSidebarFavoirit,listFavorit,setListFavorit}) {

  const [is24, setIs24] = useState(false)
  const [isHandicap, setIsHandicap] = useState(false)
  const [isSecurity, setIsSecurity] = useState(false)
  const [minHeight, setMinHeight] = useState("1.9")

  const [gareID, setGareID] = useState()
  const [gares, setGares] = useState()



  const fetchGares = () => 
  {
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
          })
        )
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
        })
    }
  }

  useEffect(() => {
    getGareId(setGareID,sport)
    fetchGares()
  },[]);
 
  return (
    <div className="wrapper--output">



      {/* Small popups at the carte to give more information en plus */}
      {window.innerWidth<760 === false?
        <Popup name="popupLinie" sport={sport} lines={lines}/>
      :""}
      {window.innerWidth<760 === false?
        <Popup name="popupState" sport={sport} lines={lines}/>
      :""}


      <div className="output__intro">
        <div className="wrapper--flex">
          <span className={"icon--rer icon--rer--"+lines}>{lines}</span> 
          <div className="output__intro__text">
            {isSidebarFavoirit===false?
              <p>Les résultats des offres de parkings sur la ligne {lines} pour venir assister à l'épreuve de {sport}</p>
              :
              <p>Les parkings que tu as mis en favoris</p>
            }
          </div>
        </div>

        {isSidebarFavoirit===true?
        ""
        :
        <FilterBox 
        setIs24={setIs24} is24={is24}
        setIsHandicap={setIsHandicap} isHandicap={isHandicap}
        setIsSecurity={setIsSecurity} isSecurity={isSecurity}
        setMinHeight={setMinHeight} minHeight={minHeight}
      />
        }
        
        
      </div>

     
      
      
      <p>{gareID}</p>
        { gareID &&
          <GareIDSelected sport={sport} lines={lines} name={name} gares={gares} gareID={gareID}/>
        }
      


      <ParkingOutput gareID={gareID} setIs24={setIs24} is24={is24}
        setIsHandicap={setIsHandicap} isHandicap={isHandicap}
        setIsSecurity={setIsSecurity} isSecurity={isSecurity}
        setMinHeight={setMinHeight} minHeight={minHeight} sport={sport} lines={lines}
        listFavorit={listFavorit} setListFavorit={setListFavorit}/>

 
    </div>
  );
}

export default MapOutput;