import React, { ReactElement } from 'react';
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

class Edit extends React.PureComponent<Props, unknown> {
  bookStore = new BookModel();

  componentDidMount = (): void => {
    const {
      setTitle,
      setAuthor,
      setCost,
      setYear,
      setStatus,
    } = this.bookStore;

    setTitle(this.props.book.title);
    setAuthor(this.props.book.author);
    setCost(this.props.book.cost);
    setYear(this.props.book.year);
    setStatus(this.props.book.status);
  }

  onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { setTitle } = this.bookStore;
    const title = e.target.value;
    setTitle(title);
  }

  onChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { setAuthor } = this.bookStore;
    const authorName = e.target.value;
    setAuthor(authorName);
  }

  onChangeCost = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { setCost } = this.bookStore;
    const cost = parseInt(e.target.value, 10);
    setCost(cost);
  }

  onChangeYear = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { setYear } = this.bookStore;
    const year = parseInt(e.target.value, 10);
    setYear(year);
  }

  onChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { setStatus } = this.bookStore;
    const status = e.target.value;
    setStatus(status);
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { id } = this.props.book;
    const {
      hideEditModalById,
      activateUserRequest,
      disableUserRequest,
    } = this.props.store.uiStore;
    const { editBook } = this.props.store.booksStore;
    const book = this.bookStore.getBook();
    const editedBook = {
      id,
      ...book,
    };
    editBook(editedBook, hideEditModalById, activateUserRequest, disableUserRequest);
  }

  onCancel = (): void => {
    const { hideEditModalById, userRequest } = this.props.store.uiStore;
    const { id } = this.props.book;
    if (userRequest) {
      return;
    }

    hideEditModalById(id);
  }

  render(): ReactElement {
    const {
      title,
      author,
      cost,
      year,
      status,
    } = this.bookStore;
    const { userRequest } = this.props.store.uiStore;
    const editButton = userRequest ? (
      <div className="spinner"></div>
    ) : (<input type='submit' value='Изменить' className='modal__submit' />);

    return (
      <div className="modal__body">
        <div className="modal__header">
          <h3 className='modal__title'>Редактирование книги</h3>
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
              type="text"
              className='modal__input'
              id='cost'
              required
              value={cost}
              onChange={this.onChangeCost}
              disabled={userRequest === true}
            />
          </div>
          <div className="modal__form-group">
            <label htmlFor='year' className='modal__label'>Дата выпуска</label>
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
            {editButton}
            <input
              type='button'
              value='Отмена'
              className={cn({
                modal__submit: userRequest === false,
                'submit-disabled': userRequest === true,
              })}
              onClick={this.onCancel}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;
