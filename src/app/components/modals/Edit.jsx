import React from 'react';

class Edit extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.book.id,
      title: this.props.book.title,
      author: this.props.book.author,
      cost: this.props.book.cost,
      year: this.props.book.year,
      status: this.props.book.status,
    };
  }

  onChange = (type) => ({ target }) => {
    const { value } = target;
    this.setState({ ...this.state, [type]: value });
  }

  onSubmit = () => (e) => {
    e.preventDefault();
    const { onUpdate, onClose } = this.props;
    onUpdate(this.state);
    onClose();
  }

  render() {
    const {
      title,
      author,
      cost,
      year,
      status,
    } = this.state;

    return (
      <>
        <h3 className='modal__title'>Редактирование книги</h3>
        <form className='modal__form' onSubmit={this.onSubmit()}>
          <div className="modal__form-group">
            <label htmlFor='title' className='modal__label'>Название</label>
            <input type="text" className='modal__input' id='title' required value={title} onChange={this.onChange('title')}/>
          </div>
          <div className="modal__form-group">
            <label htmlFor='author' className='modal__label'>Автор</label>
            <input type="text" className='modal__input' id='author' required value={author} onChange={this.onChange('author')}/>
          </div>
          <div className="modal__form-group">
            <label htmlFor='cost' className='modal__label'>Стоимость(руб.)</label>
            <input type="text" className='modal__input' id='cost' required value={cost} onChange={this.onChange('cost')}/>
          </div>
          <div className="modal__form-group">
            <label htmlFor='year' className='modal__label'>Дата выпуска</label>
            <input type="number" className='modal__input' id='year' required value={year} onChange={this.onChange('year')}/>
          </div>
          <div className="modal__form-group">
            <label htmlFor='status' className='modal__label'>Статус</label>
            <select className='modal__input' id='status' required value={status} onChange={this.onChange('status')}>
              <option value='В наличии'>В наличии</option>
              <option value='Нет в наличии'>Нет в наличии</option>
            </select>
          </div>
          <input type='submit' value='Изменить' className='modal__submit' />
        </form>
      </>
    );
  }
}

export default Edit;
