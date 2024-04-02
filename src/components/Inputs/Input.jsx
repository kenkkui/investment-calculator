import React from 'react';


function Input({ title, setTable, value }) {

  function handleChange(e) {
    const value = e.target.value;

    const updatedValues = {
      initialInvestment: title === "Initial Investment" ? value : undefined,
      annualInvestment: title === "Annual Investment" ? value : undefined,
      expectedReturn: title === "Expected Return" ? value : undefined,
      duration: title === "Duration" ? value : undefined
    };

    setTable(prev => ({ ...prev, ...updatedValues }));
  }

  return (
    <div className="input">
      <label className="title">{title}</label>
      <input 
        type='number' 
        required 
        onChange={handleChange} 
        value={value}
      />
    </div>
  );
}

export default Input;