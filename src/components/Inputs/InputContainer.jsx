import React, { useState } from 'react';
import Input from './Input';
import InputWrapper from './InputWrapper';

import "./Input.css"

const inputs = [
  [
    "Initial Investment",
    "Annual Investment",
  ],
  [
    "Duration",
    "Expected Return"
  ]
]

function InputContainer({ setTable }) {
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
              />
            })}
          </InputWrapper>
        })}
      </>}
    </div>
  );
}

export default InputContainer;