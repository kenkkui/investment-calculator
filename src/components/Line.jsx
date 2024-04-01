import React from 'react';

function Line({ firstWord, secondWord, thirdWord, children }) {
  return (
    <div className="line">
      {firstWord && <span className='word'>{firstWord}</span> }
      {thirdWord && <span className='word'>{thirdWord}</span>}
      {secondWord && <span className='word'>{secondWord}</span>}
      {children && children} 
    </div>
  );
}

export default Line;