import React from 'react';

function Input({name,minHeight,setMinHeight}) {

  function handlerOnChange(event){
    setMinHeight(event.target.value);
  }

  return (
    <div className="wrapper--input">
      <input placeholder="1.9" onChange={handlerOnChange} />
      <label>{name}</label>
    </div>
  );
}

export default Input;