import React from 'react';
import TableRow from './TableRow';
import { calculateInvestmentResults, formatter } from '../util/investment';

import "./Table.css"

function Table({ table }) {
  const resultData = calculateInvestmentResults(table)
  console.log(resultData);



  return (
    <table>
      <tr id='table-header'>
        <th>Year</th>
        <th>Investment value</th>
        <th>Interest (Year)</th>
        <th>Investment Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </table>
  );
}

export default Table;