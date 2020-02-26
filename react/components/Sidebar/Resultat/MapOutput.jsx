import React, { useState, useEffect } from 'react';
import FilterBox from './FilterBox';
import ParkingOutput from './ParkingOutput';
import Popup from '../../Map/Popup';


import getGareId from '../../../functions/map/getGareId';

// import {STATIONS} from '../../../data/stations'

function MapOutput({sport, lines,isSidebarFavoirit,listFavorit,setListFavorit,isPopUpNav,setPopUpNav,setMoodConnection,isLogin}) {

  const [is24, setIs24] = useState(false)
  const [isHandicap, setIsHandicap] = useState(false)
  const [isSecurity, setIsSecurity] = useState(false)
  const [minHeight, setMinHeight] = useState("1.9")

  const [gareID, setGareID] = useState()

  useEffect(() => {
    {window.innerWidth>760 === true?
      getGareId(setGareID,sport)
    :
    ""}

  },[]);

  function handlerLogin(){
    {setPopUpNav("true")}
    {setMoodConnection("registre")}
  }
 
  return (
    <div className="wrapper--output">



      {/* Small pupups at the carte to give more information en plus */}
      {/* {window.innerWidth<760 === false?
        <Popup name="popupLinie" sport={sport} lines={lines}/>
      :""}
      {window.innerWidth<760 === false?
        <Popup name="popupState" sport={sport} lines={lines}/>
      :""} */}


      <div className="output__intro">
        <div className="wrapper--flex">

          <div className="output__intro__text">
            {isSidebarFavoirit===false?
              <h2 class="headline--etape">Trouve ton parking ideal en function de te besoins</h2>
              :
              <div>
                <p>Tes parking tu as chosis</p>
                {isLogin===false?
                  <div>
                    <p>Pour mis tes information assecable sur la route cree vite fait un compte</p>
                    <button className="button--primary" onClick={handlerLogin}>Cree Travel Guide</button>
                  </div>
                :<p>Tes favorits sont maintenant sauvgarde dans ton compte</p>}
              </div>
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
      <ParkingOutput gareID={gareID} setIs24={setIs24} is24={is24}
        setIsHandicap={setIsHandicap} isHandicap={isHandicap}
        setIsSecurity={setIsSecurity} isSecurity={isSecurity}
        setMinHeight={setMinHeight} minHeight={minHeight} sport={sport} lines={lines}
        listFavorit={listFavorit} setListFavorit={setListFavorit}/>

 
    </div>
  );
}

export default MapOutput;