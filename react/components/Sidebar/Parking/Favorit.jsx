import React, { useState } from 'react';

function Favorit() {

  const [isLiked, setIsLiked] = useState(false);
  const toggle = () => setIsLiked(!isLiked);

  Favorit.handleClickOutside = () => setIsLiked(false);

  return (
    <button className={isLiked ? 'button--like button--like--active' : 'button--like'} onClick={toggle}></button>
  );
}

export default Favorit;



