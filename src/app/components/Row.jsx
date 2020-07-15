import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import Edit from './modals/Edit.jsx';
import Portal from './modals/Portal.jsx';

class Row extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      book: {},
    };
  }

  onEdit = () => {
    this.setState({ modalShow: true });
  }

  updateBookData = (value) => {
    this.setState({ book: { ...value } });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.book !== this.state.book) {
      const { book } = this.state;
      const { onEditBook } = this.props;

      onEditBook(book);
    }
  }

  onClose = () => {
    this.setState({ modalShow: false });
  }

  render() {
    const { book, onRemove } = this.props;
    const { modalShow } = this.state;
    const editModal = modalShow ? (
      <Portal>
        <Edit book={book} onUpdate={this.updateBookData} onClose={this.onClose}/>
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
        <div className='table__cell-button-edit' onClick={this.onEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className='table__cell-button-remove' onClick={onRemove(book.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
        </td>
        {editModal}
      </tr>
    );
  }
}

export default Row;
