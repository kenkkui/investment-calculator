import React from 'react';


function Input({ title, setTable }) {

  function handleChange(e) {
    const value = e.target.value;


    if (title === "Initial Investment") {
      setTable(prev => {
        console.log("working");
        // return {
        //   initialInvestment: value,
        //   annualInvestment: prev.annualInvestment,
        //   expectedReturn: prev.expectedReturn,
        //   duration: prev.duration
        // }
      })
    } else if (title === "Annual Investment") {
        // setTable(prev => {
        //   return {
        //     initialInvestment: prev.initialInvestment,
        //     annualInvestment: value,
        //     expectedReturn: prev.expectedReturn,
        //     duration: prev.duration
        //   }
        // })
    } else if (title === "Expected Return") {
        // setTable(prev => {
        //   return {
        //     initialInvestment: prev.initialInvestment,
        //     annualInvestment: prev.annualInvestment,
        //     expectedReturn: value,
        //     duration: prev.duration
        //   }
        // })
    } else if (title === "Duration") {
        // setTable(prev => {
        //   return {
        //     initialInvestment: prev.initialInvestment,
        //     annualInvestment: prev.annualInvestment,
        //     expectedReturn: prev.expectedReturn,
        //     duration: value
        //   }
        // })
    }

  }

  return (
    <div className="input">
      <div className="title">{title}</div>
      <input type='text' onChange={handleChange} />
    </div>
  );
}

export default Input;