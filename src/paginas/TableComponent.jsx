import React from 'react';

function TableComponent({ data }) {
  return (
    <table className="table">
      <thead className='.thead-dark'>
        <tr >
          <th>#</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Región</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;