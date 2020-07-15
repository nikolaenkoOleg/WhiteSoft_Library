import React from 'react';

import Row from './Row.jsx';

class Table extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 0,
          title: '123',
          author: 'oleg',
          cost: '100',
          year: 2020,
          status: 'В наличии',
        },
        {
          id: 1,
          title: '1234',
          author: 'ivan',
          cost: '200',
          year: 2010,
          status: 'Нет в наличии',
        },
      ],
    };
  }

  onRemove = (id) => () => {
    const { books } = this.state;
    const newBooks = books.filter((book) => book.id !== id);
    this.setState({ books: newBooks });
  }

  onEdit = (changedBook) => {
    const { books } = this.state;
    const filteredBooks = books.filter(({ id }) => id !== changedBook.id);
    this.setState({ books: [...filteredBooks, changedBook] });
  };

  render() {
    const { books } = this.state;
    return (
      <table className='table'>
        <thead className='table__head'>
          <tr className='table__row'>
            <th className='table__head'>Название</th>
            <th className='table__head'>Автор</th>
            <th className='table__head'>Стоимость</th>
            <th className='table__head'>Дата выпуска</th>
            <th className='table__head'>Статус</th>
            <th className='table__head'>Действия</th>
          </tr>
        </thead>
        <tbody>
          {books.sort((a, b) => a.id - b.id).map((book) => (
            <React.Fragment key={book.id}>
              <Row book={book} onRemove={this.onRemove} onEditBook={this.onEdit} />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
