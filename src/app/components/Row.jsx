import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

class Row extends React.PureComponent {
  editHandle = () => {
    console.log('edit');
  }

  render() {
    const { book, onRemove } = this.props;
    return (
      <tr className='table__row'>
        <td className='table__cell'>{book.title}</td>
        <td className='table__cell'>{book.author}</td>
        <td className='table__cell'>{book.cost}</td>
        <td className='table__cell'>{book.year}</td>
        <td className='table__cell'>
        <div className='table__cell-button-edit' onClick={this.editHandle}>
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className='table__cell-button-remove' onClick={onRemove(book.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
        </td>
      </tr>
    );
  }
}

export default Row;
