import React from 'react';

function TableRow({ children }) {
  return (
    <tr>
      <td className='year'></td>
      <td className='value'></td>
      <td className='interest'></td>
      <td className='total-interest'></td>
      <td className='capital'></td>
    </tr>
  );
}

export default TableRow;