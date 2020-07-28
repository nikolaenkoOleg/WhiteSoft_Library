import React from 'react';
import { observer, inject } from 'mobx-react';

import Row from './Row.jsx';
import Add from './modals/Add.jsx';

@inject('store')
@observer

class Table extends React.PureComponent {
  ckickHandler = (e) => {
    e.preventDefault();
    const { showAddModal } = this.props.store.uiStore;
    showAddModal();
  }

  render() {
    const { books } = this.props.store.booksStore;
    const { addModalIsShow } = this.props.store.uiStore;
    const addingModal = addModalIsShow ? (
      <div className="modal">
        <Add />
      </div>
    ) : null;
    return (
      <>
        <table className='table'>
          <thead className='table__head'>
            <tr className='table__row'>
              <th className='table__head'>Название</th>
              <th className='table__head'>Автор</th>
              <th className='table__head'>Стоимость(руб.)</th>
              <th className='table__head'>Год выпуска</th>
              <th className='table__head'>Статус</th>
              <th className='table__head'>Действия</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <React.Fragment key={book.id}>
                <Row book={book} modals={this.uiStore}/>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      <a href="#" className="add" onClick={this.ckickHandler}>Добавить книгу</a>
      {addingModal}
      </>
    );
  }
}

export default Table;
