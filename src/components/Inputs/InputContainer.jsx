import React from 'react';
import Input from './Input';
import InputWrapper from './InputWrapper';

import "./Input.css"

function InputContainer({ forwardedRef }) {
  return (
    <div className="input-container" ref={forwardedRef}>
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
    </div>
  );
}

export default InputContainer;