import React, { useState } from 'react';

function ToggelButton({name}) {

  const [isToggeled, setIsToggeled] = useState(false);
  const toggle = () => setIsToggeled(!isToggeled);

  ToggelButton.handleClickOutside = () =>  setIsToggeled(false);

  return (
    <button className={isToggeled ? 'button button--toggel button--toggel--active' : 'button button--toggel'} onClick={toggle}>{name}</button>
  );
}

export default ToggelButton;

