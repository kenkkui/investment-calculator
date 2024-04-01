import React from 'react';


function Input({ title }) {

  function handleChange(e) {
    const value = e.target.value;

    console.log(this);
  }

  return (
    <div className="input">
      <div className="title">{title}</div>
      <input type='text' onChange={handleChange} />
    </div>
  );
}

export default Input;