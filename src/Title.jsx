import React from 'react';

const headTitle = "INVESTMENT CALCULATOR"

function Title() {
  return (
    <div className="title">{headTitle.split("").map((item, index) => {
      return <div className='character-wrapper' key={index}>
        <div className='character'>
          {item}
        </div>
      </div>
    })}</div>
  );
}

export default Title;