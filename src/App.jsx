import React from 'react';
import "./Index.css"
import "./components/Background.css"

import Background from './components/Background';

function App() {
  return (
    <>
      {/* <section id="foreground"></section> */}
      <section id="page">
        <section id="part1">
          <div className="rectangle-frame">
            <div className="rectangle"></div>
          </div>
          <div className="rectangle-frame">
            <div className="rectangle"></div>
          </div>
          <div className="rectangle-frame">
            <div className="rectangle"></div>
          </div>

          <main className="content-container">
            <div className="content">
              <div className="title">Investment Calculator</div>

              <div className="input-container">

              </div>
            </div>
          </main>
        </section>

        <section id="part2">
          <div className="rectangle-frame">
            <div className="rectangle"></div>
          </div>
          <div className="rectangle-frame">
            <div className="rectangle"></div>
          </div>
          <div className="rectangle-frame">
            <div className="rectangle"></div>
          </div>
          <div className="rectangle-frame">
            <div className="rectangle"></div>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;