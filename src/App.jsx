import React, { useEffect, useState } from 'react';
import Rectangle from './components/Rectangle';

import "./Index.css"
import "./components/Foreground.css"

import Table from './components/Table';
import Author from './components/Author';
import Title from './Title';
import InputContainer from './components/Inputs/InputContainer';

import { calculateInvestmentResults, formatter } from './util/investment';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [table, setTable] = useState({
    initialInvestment: 100000,
    annualInvestment: 120000,
    expectedReturn: 60,
    duration: 12  
  });
  
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
        <Title />

        <section id="part1">
          <Rectangle />
          <Rectangle />
          <Rectangle />

          {showContent && <main className="content-container">
            <div className="content">
                <InputContainer 
                  setTable={setTable}
                  table={table}
                />
            </div>
          </main>}

          <Author />
        </section>

        <section id="part2">
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />

          <Table 
            table={table}
          />
        </section>
      </section>
    </>
  );
}

export default App;