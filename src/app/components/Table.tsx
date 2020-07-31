import React, { ReactElement } from 'react';
import { observer, inject } from 'mobx-react';

import Row from './Row';
import Add from './modals/Add';

import MainStore from '../stores';

interface Props {
  store: MainStore
}

@inject('store')
@observer

class Table extends React.PureComponent<Props, unknown> {
  ckickHandler = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    const { showAddModal } = this.props.store.uiStore;
    showAddModal();
  }

  render(): ReactElement {
    const { books } = this.props.store.booksStore;
    const { addModalIsShow } = this.props.store.uiStore;
    const addingModal = addModalIsShow ? (
      <div className="modal">
        <Add store={this.props.store}/>
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
                <Row book={book} store={this.props.store} />
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
