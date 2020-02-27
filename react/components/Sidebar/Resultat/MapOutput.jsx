import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterBox from './FilterBox';
import ParkingOutput from './ParkingOutput';
import Popup from '../../Map/Popup';
// import ButtonClose from '../../Global/ButtonClose';
import GareIDSelected from '../Resultat/Filter/GareIDSelected';
import gareIdToGareName from '../../../functions/map/gareIdToGareName';
import ButtonBack from '../../Global/ButtonBack';
import ButtonCloseFavorit from '../../Global/ButtonCloseFavorit'


import getGareId from '../../../functions/map/getGareId';

// import {STATIONS} from '../../../data/stations'

function MapOutput({sport, lines,isSidebarFavoirit,listFavorit,setListFavorit,isPopUpNav,setPopUpNav,setMoodConnection,isLogin,setIsSelected,setIsFirstFav,setIsSidebarFavoirit}) {


  const [is24, setIs24] = useState(false)
  const [isHandicap, setIsHandicap] = useState(false)
  const [isSecurity, setIsSecurity] = useState(false)
  const [minHeight, setMinHeight] = useState("1.9")
  const [isPrixUp, setIsPrixUp] = useState(true)

  const [gareID, setGareID] = useState()
  const [gares, setGares] = useState()
  const [isGareIdSelected, setIsGareIdSelected] = useState(true)


  const fetchGares = () => 
  {

    

    const linesJO = ['a', 'b', 'c', 'd', 'j', 'n', 'p'];
    const Line= []
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
    // getGareId(setGareID,sport)
    fetchGares()
    {window.innerWidth>760 === true?
      getGareId(setGareID,sport)
    :
    ""}

  },[]);

  // function handlerLogin(){
  //   {setPopUpNav("true")}
  //   {setMoodConnection("registre")}
  // }

  const handlerClose = () => {
    console.log('want to close')
    // {setPopUpNav(false)}
      // setIsGareIdSelected={setIsGareIdSelected}
    {setIsGareIdSelected(false)}
      // setIsGareIdSelected(true)
    {setGareID(null)}
  }
 
  return (
    <div className="wrapper--output">
      

      <div className="output__intro">
        <div className="wrapper--flex">

          <div className="output__intro__text">
          
            {isSidebarFavoirit===false?
              lines.length>1?
                <div className="wrapper--flex">
                  <ButtonBack setIsSelected={setIsSelected}/>
                  
                  <div className={"popup__icon icon--rer icon--rer--"+lines[0]}>{lines[0]}</div>
                  <div className={"popup__icon icon--rer icon--rer--"+lines[1]}>{lines[1]}</div>
                  { gareID!==undefined?
                  <p className="icon--rer__text icon--rer__text__link" onClick={handlerClose} >Lignes</p>
                  :
                  <p className="icon--rer__text" >Lignes</p>
                }

                  { gareID &&
                    <div className="box--gareSelect">
                      <div className="wrapper--flex">
                        <ButtonBack setIsSelected={setIsSelected}/>
                        <p>Zone du Parking</p>
                      </div>
                    </div>
                  }
                  
                </div>
              :
              <div className="wrapper--flex">
                <ButtonBack setIsSelected={setIsSelected}/>
                <div className={"popup__icon icon--rer icon--rer--"+lines}>{lines}
                </div>
                { gareID!==undefined?
                  <p className="icon--rer__text icon--rer__text__link" onClick={handlerClose} >Ligne</p>
                  :
                  <p className="icon--rer__text" >Ligne</p>
                }
                { gareID &&
                    <div className="box--gareSelect">
                      <div className="wrapper--flex">
                        <ButtonBack setIsSelected={setIsSelected}/>
                        <p>Zone du Parking</p>
                      </div>
                    </div>
                  }
              </div>
                
              :
              <div>
                <div className="wrapper--flex">
                  <div className="wrapper--relative">
                  <ButtonCloseFavorit setIsSidebarFavoirit={setIsSidebarFavoirit}/>
                  <p className="icon--rer__text">Ta List</p>
                  </div>
                  
                </div>
                {/* {isLogin===false?
                  <div>
                    <p>Pour mis tes information assecable sur la route cree vite fait un compte</p>
                    <button className="button--primary" onClick={handlerLogin}>Cree Travel Guide</button>
                  </div>
                :<p>Tes favorits sont maintenant sauvgarde dans ton compte</p>} */}
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
        isPrixUp={isPrixUp} setIsPrixUp={setIsPrixUp} 
      />
        }
        
        
      </div>

     
      
      
      {/* <p>{gareID}</p> */}
        { gareID &&
          <GareIDSelected sport={sport} lines={lines} name={name} gares={gares} gareID={gareID} setGareID={setGareID} 
          isGareIdSelected={isGareIdSelected} 
          setIsGareIdSelected={setIsGareIdSelected}
          />
        }
      


      <ParkingOutput gareID={gareID} setIs24={setIs24} is24={is24}
        setIsHandicap={setIsHandicap} isHandicap={isHandicap}
        setIsSecurity={setIsSecurity} isSecurity={isSecurity}
        setMinHeight={setMinHeight} minHeight={minHeight} sport={sport} lines={lines}
        listFavorit={listFavorit} setListFavorit={setListFavorit}
        isPrixUp={isPrixUp} setIsPrixUp={setIsPrixUp}
        setIsFirstFav={setIsFirstFav}
        setPopUpNav={setPopUpNav} 
        isLogin={isLogin}
        setMoodConnection={setMoodConnection}
        isSidebarFavoirit={isSidebarFavoirit}
      />

 
    </div>
  );
}

export default MapOutput;