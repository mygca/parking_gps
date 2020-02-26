import React, { useState } from 'react';

const ButtonSeeMoreContext = React.createContext();

const ButtonSeeMore = ({ isOpen }) => {

  // const [btnOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!btnOpen);

  // ButtonSeeMore.handleClickOutside = () => setIsOpen(false);

  return (
    // <button className={btnOpen ? 'button--seeMore button--seeMore--active' : 'button--seeMore'} onClick={toggle}></button>
    
      <button className={isOpen ? 'button--seeMore button--seeMore--active' : 'button--seeMore'}></button>
    
  );
}

export default ButtonSeeMore;