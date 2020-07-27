import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { observer, inject } from 'mobx-react';

import Edit from './modals/Edit.jsx';
import Portal from './modals/Portal.jsx';

@inject('store')
@observer

class Row extends React.PureComponent {
  clickHandler = () => {
    const { showEditModalById } = this.props.store.uiStore;
    const { id } = this.props.book;
    showEditModalById(id);
  }

  onRemoveBook = () => {

  }

  render() {
    const { book } = this.props;
    const { booksStateById } = this.props.store.uiStore;
    const editModal = booksStateById[book.id].edit ? (
      <Portal>
        <Edit book={book}/>
      </Portal>
    ) : null;

    return (
      <tr className='table__row'>
        <td className='table__cell'>{book.title}</td>
        <td className='table__cell'>{book.author}</td>
        <td className='table__cell'>{book.cost}</td>
        <td className='table__cell'>{book.year}</td>
        <td className='table__cell'>{book.status}</td>
        <td className='table__cell'>
        <div className='table__cell-button-edit' onClick={this.clickHandler}>
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className='table__cell-button-remove' onClick={this.onRemoveBook(book.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
        </td>
        {editModal}
      </tr>
    );
  }
}

export default Row;
