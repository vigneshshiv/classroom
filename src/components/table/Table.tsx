/**
 * Table
 */
import React, { ReactNode } from 'react';

const Table = ({ headers, rows }: { headers: string[], rows: ReactNode[][] }): JSX.Element => {
  return (
    <table className='table-fixed min-w-full divide-y divide-gray-200 dark:divide-gray-400'>
      <thead className='bg-gray-100 dark:bg-gray-700 border-b-[3px] border-b-[#e3e8ed] dark:border-b-gray-400'>
        <tr>
          {headers.map((header) => (
            <th 
              key={header}
              scope='col'
              className='py-2 px-6 text-left text-sm font-medium tracking-wider text-gray-700 dark:text-gray-200 uppercase'
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200 dark:divide-gray-500 dark:text-gray-50'>
        {rows.map((row, rowIndex) => {
          return (
            <tr
              key={rowIndex}
              className='hover:bg-blue-50 dark:hover:bg-gray-700'
            >
              {row.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  className='py-2.5 px-6 text-sm tracking-wider text-gray-700 dark:text-gray-200'
                >
                  {column}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;