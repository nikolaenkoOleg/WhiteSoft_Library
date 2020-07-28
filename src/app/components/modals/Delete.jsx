import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer

class Delete extends React.PureComponent {
  onCancel = () => {
    const { hideDeleteModalById } = this.props.store.uiStore;
    const { id } = this.props.book;
    hideDeleteModalById(id);
  }

  onDeleteBookHandle = () => {
    const { deleteBook } = this.props.store.booksStore;
    const {
      hideDeleteModalById,
      activateUserRequest,
      disableUserRequest,
    } = this.props.store.uiStore;

    deleteBook(this.props.book, hideDeleteModalById, activateUserRequest, disableUserRequest);
  }

  render() {
    return (
      <>
        <div className="modal__header">
          <h3 className='modal__title'>Удаление книги</h3>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className='modal__close'
            onClick={this.onCancel}
          />
        </div>
        <p className="modal__question">Удалить книгу &quot;{this.props.book.title}&quot; ?</p>
        <div className="button-group">
          <input type='button' value='Удалить' className='modal__submit' onClick={this.onDeleteBookHandle}/>
          <input type='button' value='Отмена' className='modal__submit' onClick={this.onCancel} />
        </div>
      </>
    );
  }
}

export default Delete;
