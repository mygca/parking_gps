import React from 'react';

function Input({name}) {
  return (
    <div className="wrapper--input">
      <input placeholder="1.9" />
      <label>{name}</label>
    </div>
  );
}

export default Input;