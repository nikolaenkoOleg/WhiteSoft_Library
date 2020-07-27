import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { observer, inject } from 'mobx-react';

import Book from '../../stores/bookModel';

@inject('store')
@observer

class Add extends React.PureComponent {
  book = new Book();

  onChangeTitle = ({ target }) => {
    const { setTitle } = this.book;
    setTitle(target.value);
  }

  onChangeAuthor = ({ target }) => {
    const { setAuthor } = this.book;
    setAuthor(target.value);
  }

  onChangeCost = ({ target }) => {
    const { setCost } = this.book;
    setCost(target.value);
  }

  onChangeYear = ({ target }) => {
    const { setYear } = this.book;
    setYear(target.value);
  }

  onChangeStatus = ({ target }) => {
    const { setStatus } = this.book;
    setStatus(target.value);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { addBook } = this.props.store.booksStore;
    const { hideAddModal, activateUserRequest, disableUserRequest } = this.props.store.uiStore;
    const { getBook } = this.book;
    const newBook = getBook();

    addBook(newBook, hideAddModal, activateUserRequest, disableUserRequest);
  }

  onCancel = () => {
    const { hideAddModal } = this.props.store.uiStore;
    hideAddModal();
  }

  render() {
    return (
      <>
        <div className="modal__header">
          <h3 className='modal__title'>Добавление новой книги</h3>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className='modal__close'
            onClick={this.onCancel}
          />
        </div>
        <form className='modal__form' onSubmit={this.onSubmit}>
          <div className="modal__form-group">
            <label htmlFor='title' className='modal__label'>Название</label>
            <input
              type="text"
              className='modal__input'
              id='title'
              required
              value={this.book.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="modal__form-group">
            <label htmlFor='author' className='modal__label'>Автор</label>
            <input
              type="text"
              className='modal__input'
              id='author'
              required
              value={this.book.author}
              onChange={this.onChangeAuthor}
            />
          </div>
          <div className="modal__form-group">
            <label htmlFor='cost' className='modal__label'>Стоимость(руб.)</label>
            <input
              type="number"
              className='modal__input'
              id='cost'
              required
              value={this.book.cost}
              onChange={this.onChangeCost}
            />
          </div>
          <div className="modal__form-group">
            <label htmlFor='year' className='modal__label'>Год выпуска</label>
            <input
              type="number"
              className='modal__input'
              id='year'
              required
              value={this.book.year}
              onChange={this.onChangeYear}
            />
          </div>
          <div className="modal__form-group">
            <label htmlFor='status' className='modal__label'>Статус</label>
            <select
              className='modal__input'
              id='status'
              required
              value={this.book.status}
              onChange={this.onChangeStatus}>
                <option value='В наличии'>В наличии</option>
                <option value='Нет в наличии'>Нет в наличии</option>
            </select>
          </div>
          <div className="button-group">
            <input type='submit' value='Добавить' className='modal__submit' />
            <input type='button' value='Отмена' className='modal__submit' onClick={this.onCancel} />
          </div>
        </form>
      </>
    );
  }
}

export default Add;
