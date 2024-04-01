import React, { useState } from 'react';
import Input from './Input';
import InputWrapper from './InputWrapper';

import "./Input.css"

function InputContainer({ setTable }) {
  const [inputRender, setInputRender] = useState(false);
  

  return (
    <div className="input-container" onAnimationEnd={() => setInputRender(true)}>
      {inputRender && <>
        <InputWrapper>
          <Input 
            title="Initial Investment"
          />
          <Input 
            title="Annual Investment"
          />
        </InputWrapper>

        <InputWrapper>
          <Input 
            title="Duration"
          />
          <Input 
            title="Expected Return"
          />
        </InputWrapper>
      </>}
    </div>
  );
}

export default InputContainer;