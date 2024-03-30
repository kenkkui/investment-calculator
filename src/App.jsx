import React, { useEffect, useRef, useState } from 'react';
import Rectangle from './components/Rectangle';

import InputContainer from './components/Inputs/InputContainer';

import "./Index.css"
import "./components/Foreground.css"

function App() {
  const animationDoneElem = useRef();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (animationDoneElem) {
      const element = animationDoneElem.current;

      element.addEventListener("animationend", (e) => {
        if (e.target === e.currentTarget) {
          setShowContent(true)
        }
      })
    }
  }, [])

  const headTitle = "INVESTMENT CALCULATOR"


  return (
    <>
      {/* <section id="foreground"></section> */}
      <section id="page">
        <section id="part1">
          <Rectangle />
          <Rectangle 
            forwardedRef={animationDoneElem}
          />
          <Rectangle />

          {/* {showContent && <main className={`content-container ${showContent ? "visible" : undefined}`}> */}
          {showContent && <main className="content-container">
            <div className="background"></div>
            <div className="content">

            <div className="title">{headTitle.split("").map(item => {
              return <div className='character-wrapper'>
                <div className='character'>
                {item}
                </div>
              </div>
            })}</div>

              <InputContainer />
              <section id="author-container">

              </section>
            </div>
          </main>}

        </section>

        <section id="part2">
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
        </section>
      </section>
    </>
  );
}

export default App;