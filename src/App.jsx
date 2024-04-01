import React, { useEffect, useState } from 'react';
import Rectangle from './components/Rectangle';

import InputContainer from './components/Inputs/InputContainer';

import "./Index.css"
import "./components/Foreground.css"
import Table from './components/Table';
import Author from './Author';
import Title from './Title';

function App() {
  const [showContent, setShowContent] = useState(false);

  
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

          {showContent && <main className="content-container">
            <div className="content">
                <Title />
                <InputContainer />
                
            </div>
          </main>}

          <Author />
        </section>

        <section id="part2">
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />

          <Table />
        </section>
      </section>
    </>
  );
}

export default App;