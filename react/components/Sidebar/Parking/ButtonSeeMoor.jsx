import React, { useState } from 'react';

function ButtonSeeMore() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  ButtonSeeMore.handleClickOutside = () => setIsOpen(false);

  return (
    <button className={isOpen ? 'button--seeMore button--seeMore--active' : 'button--seeMore'} onClick={toggle}></button>
  );
}

export default ButtonSeeMore;