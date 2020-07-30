import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { observer, inject } from 'mobx-react';
import cn from 'classnames';

import BookModel from '../../stores/bookModel';

import { Book } from '../../stores/booksStore';
import MainStore from '../../stores';

interface Props {
  book: Book,
  store: MainStore
}

@inject('store')
@observer

class Add extends React.PureComponent<Props, {}> {
  bookStore = new BookModel();

  onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { setTitle } = this.bookStore;
    setTitle(e.target.value);
  }

  onChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { setAuthor } = this.bookStore;
    setAuthor(e.target.value);
  }

  onChangeCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { setCost } = this.bookStore;
    setCost(e.target.value);
  }

  onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { setYear } = this.bookStore;
    setYear(parseInt(e.target.value, 10));
  }

  onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { setStatus } = this.bookStore;
    setStatus(e.target.value);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { addBook } = this.props.store.booksStore;
    const {
      hideAddModal,
      activateUserRequest,
      disableUserRequest,
      addBookState,
    } = this.props.store.uiStore;
    const { getBook } = this.bookStore;
    const newBook = getBook();

    addBook(newBook, hideAddModal, activateUserRequest, disableUserRequest, addBookState);
  }

  onCancel = () => {
    const { hideAddModal, userRequest } = this.props.store.uiStore;
    if (userRequest) {
      return;
    }

    hideAddModal();
  }

  render() {
    const {
      title,
      author,
      cost,
      year,
      status,
    } = this.bookStore;

    const { userRequest } = this.props.store.uiStore;
    const addButton = userRequest ? (
      <div className="spinner"></div>
    ) : (<input type='submit' value='Добавить' className='modal__submit' />);

    return (
      <div className="modal__body">
        <div className="modal__header">
          <h3 className='modal__title'>Добавление новой книги</h3>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className={cn({
              modal__close: userRequest === false,
              'modal-close-disabled': userRequest === true,
            })}
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
              value={title}
              onChange={this.onChangeTitle}
              disabled={userRequest === true}
            />
          </div>
          <div className="modal__form-group">
            <label htmlFor='author' className='modal__label'>Автор</label>
            <input
              type="text"
              className='modal__input'
              id='author'
              required
              value={author}
              onChange={this.onChangeAuthor}
              disabled={userRequest === true}
            />
          </div>
          <div className="modal__form-group">
            <label htmlFor='cost' className='modal__label'>Стоимость(руб.)</label>
            <input
              type="number"
              className='modal__input'
              id='cost'
              required
              value={cost}
              onChange={this.onChangeCost}
              disabled={userRequest === true}
            />
          </div>
          <div className="modal__form-group">
            <label htmlFor='year' className='modal__label'>Год выпуска</label>
            <input
              type="number"
              className='modal__input'
              id='year'
              required
              value={year}
              onChange={this.onChangeYear}
              disabled={userRequest === true}
            />
          </div>
          <div className="modal__form-group">
            <label htmlFor='status' className='modal__label'>Статус</label>
            <select
              className='modal__input'
              id='status'
              required
              value={status}
              onChange={this.onChangeStatus}
              disabled={userRequest === true}>
                <option value='В наличии'>В наличии</option>
                <option value='Нет в наличии'>Нет в наличии</option>
            </select>
          </div>
          <div className="button-group">
            {addButton}
            <input
              type='button'
              value='Отмена'
              className={cn({
                modal__submit: userRequest === false,
                'submit-disabled': userRequest === true,
              })}
              onClick={this.onCancel}
              disabled={userRequest === true}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Add;
