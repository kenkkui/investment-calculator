import React from 'react';


function Input({ title }) {
  return (
    <div className="input">
      <div className="title">{title}</div>
      <input type='text' />
    </div>
  );
}

export default Input;