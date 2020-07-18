import React from 'react';
import { connect } from 'react-redux';

import Row from './Row.jsx';
import Add from './modals/Add.jsx';
import Portal from './modals/Portal.jsx';

const mapStateToProps = (state) => {
  const { books } = state;

  const sortedBooks = books.slice().sort((a, b) => a.id - b.id);
  return { books: sortedBooks };
};

class Table extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  onAdd = (e) => {
    e.preventDefault();
    this.setState({ modalShow: true });
  }

  onClose = () => {
    this.setState({ modalShow: false });
  }

  render() {
    const { modalShow } = this.state;
    const { books } = this.props;
    const addingModal = modalShow ? (
      <Portal>
        <Add onClose={this.onClose}/>
      </Portal>
    ) : null;
    return (
      <>
        <table className='table'>
          <thead className='table__head'>
            <tr className='table__row'>
              <th className='table__head'>Название</th>
              <th className='table__head'>Автор</th>
              <th className='table__head'>Стоимость(руб.)</th>
              <th className='table__head'>Дата выпуска</th>
              <th className='table__head'>Статус</th>
              <th className='table__head'>Действия</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <React.Fragment key={book.id}>
                <Row book={book} />
              </React.Fragment>
            ))}
          </tbody>
        </table>
      <a href="#" className="add" onClick={this.onAdd}>Добавить книгу</a>
      {addingModal}
      </>
    );
  }
}

export default connect(mapStateToProps)(Table);

//добавить кнопки закрытия модалок
