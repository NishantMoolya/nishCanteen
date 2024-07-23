// src/DataTable.js

import React from 'react';

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="text-center p-4">No data available</div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-scroll">
      <table className="min-w-full bg-white border rounded overflow-x-scroll">
        <thead>
          <tr className="bg-slate-200 text-gray-900 uppercase leading-normal">
          <th key={'id'} className="py-3 px-6 text-center">
                no.
              </th>
            {headers.map((header) => (
              <th key={header} className="py-3 px-6 text-center">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-slate-50">
                <td key={"id"+String(index)} className="py-3 px-6 text-center text-slate-900 text-base font-semibold">
                    {index+1}
                </td>
              {headers.map((header) => (
                <td key={header} className="py-3 px-6 text-center text-slate-900 text-base font-semibold">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;