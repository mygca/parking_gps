import React from 'react';

function Input({name,minHeight,setMinHeight}) {

  function handlerOnChange(e){
    setMinHeight(e);
  }

  return (
    <div className="wrapper--input">
      <input placeholder="1.9" onChange={(e) => {handlerOnChange(e)}} />
      <label>{name}</label>
    </div>
  );
}

export default Input;