import React, { useEffect, useState } from 'react';
import Rectangle from './components/Rectangle';

import InputContainer from './components/Inputs/InputContainer';

import "./Index.css"
import "./components/Foreground.css"

function App() {
  const [showContent, setShowContent] = useState(false);

  const headTitle = "INVESTMENT CALCULATOR"
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* <section id="foreground"></section> */}
      <section id="page">
        <section id="part1">
          <Rectangle />
          <Rectangle />
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