import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { observer, inject } from 'mobx-react';
import cn from 'classnames';

import { Book } from '../../stores/booksStore';
import MainStore from '../../stores';

interface Props {
  book: Book,
  store: MainStore
}

@inject('store')
@observer

class Delete extends React.PureComponent<Props, unknown> {
  onCancel = (): void => {
    const { hideDeleteModalById, userRequest } = this.props.store.uiStore;
    const { id } = this.props.book;
    if (userRequest) {
      return;
    }

    hideDeleteModalById(id);
  }

  onDeleteBookHandle = (): void => {
    const { deleteBook } = this.props.store.booksStore;
    const {
      hideDeleteModalById,
      activateUserRequest,
      disableUserRequest,
      deleteBookState,
    } = this.props.store.uiStore;

    deleteBook(
      this.props.book.id,
      hideDeleteModalById,
      activateUserRequest,
      disableUserRequest,
      deleteBookState,
    );
  }

  render(): ReactElement {
    const { userRequest } = this.props.store.uiStore;
    const deleteButton = userRequest ? (
      <div className="spinner"></div>
    ) : (<input type='button' value='Удалить' className='modal__submit' onClick={this.onDeleteBookHandle} />);

    return (
      <div className="modal__body">
        <div className="modal__header">
          <h3 className='modal__title'>Удаление книги</h3>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className={cn({
              modal__close: userRequest === false,
              'modal-close-disabled': userRequest === true,
            })}
            onClick={this.onCancel}
          />
        </div>
        <p className="modal__question">Удалить книгу &quot;{this.props.book.title}&quot; ?</p>
        <div className="button-group">
          {deleteButton}
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
      </div>
    );
  }
}

export default Delete;
