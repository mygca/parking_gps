import React, { useState } from 'react';

function Favorit({listFavorit,setListFavorit}) {

  const [isLiked, setIsLiked] = useState(false);
  
  // const toggle = () => setIsLiked(!isLiked) ;

  Favorit.handleClickOutside = () => setIsLiked(false);

  // let parkingID;

  function toggle(){
    setIsLiked(!isLiked)

    // if(listFavorit.indexOf(parkingID) === -1) {
    //   listFavorit.push(parkingID);
    //   setListFavorit([...listFavorit, parkingID])
    // }
    
    
  }


  return (
    <button className={isLiked ? 'button--like button--like--active' : 'button--like'} onClick={toggle}></button>
  );
}

export default Favorit;



