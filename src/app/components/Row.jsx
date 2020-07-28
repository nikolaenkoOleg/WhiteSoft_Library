import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { observer, inject } from 'mobx-react';

import Edit from './modals/Edit.jsx';
import Delete from './modals/Delete.jsx';
import Portal from './modals/Portal.jsx';

@inject('store')
@observer

class Row extends React.PureComponent {
  onEditHandle = () => {
    const { showEditModalById } = this.props.store.uiStore;
    const { id } = this.props.book;
    showEditModalById(id);
  }

  onRemoveHandle = () => {
    const { showDeleteModalById } = this.props.store.uiStore;
    const { id } = this.props.book;
    showDeleteModalById(id);
  }

  render() {
    const { book } = this.props;
    const { booksStateById } = this.props.store.uiStore;
    const editModal = booksStateById[book.id].edit ? (
      <Portal>
        <Edit book={book}/>
      </Portal>
    ) : null;

    const deleteModal = booksStateById[book.id].delete ? (
      <Portal>
        <Delete book={book}/>
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
        <div className='table__cell-button-edit' onClick={this.onEditHandle}>
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className='table__cell-button-remove' onClick={this.onRemoveHandle}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
        </td>
        {editModal}
        {deleteModal}
      </tr>
    );
  }
}

export default Row;
