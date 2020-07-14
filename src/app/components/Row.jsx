import React from 'react';

const Row = ({ book }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.cost}</td>
      <td>{book.year}</td>
    </tr>
  );
};

export default Row;
