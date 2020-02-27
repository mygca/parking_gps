import React, { useState } from 'react';

function Favorit({listFavorit,setListFavorit,setIsFirstFav,parkings,setPopUpNav,setMoodConnection}) {

  const [isLiked, setIsLiked] = useState(false);
  
  // const toggle = () => setIsLiked(!isLiked) ;

  Favorit.handleClickOutside = () => setIsLiked(false);

  let parkingID = parkings.recordid;

  function toggle(){
    setIsLiked(!isLiked)
    //setIsFirstFav(true)
    setPopUpNav("true")
    setMoodConnection("registre")

    

    //getParkingID();

    // if(listFavorit.indexOf(parkingID) === -1) {
    //   listFavorit.push(parkingID);
    //   setListFavorit([...listFavorit, parkingID])
    // }
   
    
  }


  return (
    
  <button className={isLiked ? 'button--like button--like--active' : 'button--like'} onClick={toggle}></button>
  // {console.log(parkings.id)}

  );
}

export default Favorit;



