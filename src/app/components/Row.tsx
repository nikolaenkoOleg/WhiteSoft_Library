import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { observer, inject } from 'mobx-react';

import Edit from './modals/Edit';
import Delete from './modals/Delete';

import { Book } from '../stores/booksStore';
import MainStore from '../stores';

interface Props {
  book : Book,
  store: MainStore,
}

@inject('store')
@observer

class Row extends React.PureComponent<Props, unknown> {
  onEditHandle = (): void => {
    const { showEditModalById } = this.props.store.uiStore;
    const { id } = this.props.book;
    showEditModalById(id);
  }

  onRemoveHandle = (): void => {
    const { showDeleteModalById } = this.props.store.uiStore;
    const { id } = this.props.book;
    showDeleteModalById(id);
  }

  render(): ReactElement {
    const { book } = this.props;
    const { booksStateById } = this.props.store.uiStore;
    const booksState = booksStateById.find((state) => state.id === book.id);

    const editModal = booksState?.state.editable ? (
      <td className="modal">
        <Edit book={book} store={this.props.store}/>
      </td>
    ) : null;

    const deleteModal = booksState?.state.removable ? (
      <td className="modal">
        <Delete book={book} store={this.props.store}/>
      </td>
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
