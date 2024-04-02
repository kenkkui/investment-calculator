import React, { useState } from 'react';
import Input from './Input';
import InputWrapper from './InputWrapper';

import "./Input.css"

const inputs = [
  [
    {
      name: "Initial Investment",
      value: table.initialInvestment
    },
    {
      name: "Annual Investment",
      value: table.annulaInvestment
    },
  ],
  [
    {
      name: "Expected Return",
      value: table.expectedReturn
    },
    {
      name: "Duration",
      value: table.duration
    },
  ]
]

function InputContainer({ setTable, table }) {
  const [inputRender, setInputRender] = useState(false);


  return (
    <div className="input-container" onAnimationEnd={() => setInputRender(true)}>
      {inputRender && <>
        {inputs.map(item => {
          return <InputWrapper>
            {item.map((item, index) => {
              return <Input 
                key={index}
                title={item}
                setTable={setTable}
                table={table}
              />
            })}
          </InputWrapper>
        })}
      </>}
    </div>
  );
}

export default InputContainer;