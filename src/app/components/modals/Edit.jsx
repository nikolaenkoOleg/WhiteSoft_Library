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
      <div className='modal__body'>
        <form className='modal__form' onSubmit={this.onSubmit()}>
          <input type="text" className='modal__input' value={title} onChange={this.onChange('title')}/>
          <input type="text" className='modal__input' value={author} onChange={this.onChange('author')}/>
          <input type="text" className='modal__input' value={cost} onChange={this.onChange('cost')}/>
          <input type="number" className='modal__input' value={year} onChange={this.onChange('year')}/>
          <select className='modal__input' value={status} onChange={this.onChange('status')}>
            <option value='В наличии'>В наличии</option>
            <option value='Нет в наличии'>Нет в наличии</option>
          </select>
          <input type='submit' value='Изменить' />
        </form>
      </div>
    );
  }
}

export default Edit;
