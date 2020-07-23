import * as React from 'react';
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import Edit from './modals/Edit.jsx';
import Portal from './modals/Portal.jsx';
import { deleteBookAction } from '../actions';

const mapDispathToProps = {
  deleteBook: deleteBookAction,
};

interface State { 
  modalShow: boolean;
};

class Row extends React.PureComponent<{}, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  onRemoveBook = (id) => () => {
    const { deleteBook } = this.props;
    deleteBook({ id });
  }

  onEdit = () => {
    this.setState({ modalShow: true });
  }

  onClose = () => {
    this.setState({ modalShow: false });
  }

  render() {
    const { book } = this.props;
    const { modalShow } = this.state;
    const editModal = modalShow ? (
      <Portal>
        <Edit book={book} onClose={this.onClose} />
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
        <div className='table__cell-button-remove' onClick={this.onRemoveBook(book.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
        </td>
        {editModal}
      </tr>
    );
  }
}

export default connect(null, mapDispathToProps)(Row);
