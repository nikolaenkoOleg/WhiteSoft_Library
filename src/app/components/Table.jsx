import React from 'react';

import Row from './Row.jsx';

const books = [
  {
    id: 0,
    title: '123',
    author: 'oleg',
    cost: '100',
    year: 2020,
  },
  {
    id: 1,
    title: '1234',
    author: 'ivan',
    cost: '200',
    year: 2010,
  },
];

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Автор</th>
          <th>Стоимость</th>
          <th>Дата выпуска</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <React.Fragment key={book.id}>
            <Row book={book} />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
