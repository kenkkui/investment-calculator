import React from 'react';
import "./Title.css";

const headTitle = "INVESTMENT CALCULATOR"

function Title() {
  return (
    <div id="doc-title">{headTitle.split("").map((item, index) => {
      return <div className='character-wrapper' key={index}>
        <div className='character'>
          {item}
        </div>
      </div>
    })}</div>
  );
}

export default Title;