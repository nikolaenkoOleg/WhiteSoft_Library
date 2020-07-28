import { observable, action } from 'mobx';

export default class BooksStore {
  @observable books = [
    {
      id: 0,
      title: 'Война и мир',
      author: 'Лев Николаевич Толстой',
      cost: '2200',
      year: 1867,
      status: 'В наличии',
    },
    {
      id: 1,
      title: 'Мастер и Маргарита',
      author: 'Михаил Афанасьевич Булгаков',
      cost: '1200',
      year: 1966,
      status: 'Нет в наличии',
    },
    {
      id: 2,
      title: 'Униженные и оскорблённые',
      author: 'Фёдор Михайлович Достоевский',
      cost: '1340',
      year: 1861,
      status: 'В наличии',
    },
  ];

  @action addBook = (newBook, closeModal, activateAddRequest, disableAddRequest, addBookState) => {
    const newBookId = this.books.length === 0 ? 0 : this.books[this.books.length - 1].id + 1;
    activateAddRequest();
    setTimeout(() => {
      addBookState(newBookId);
      this.books.push({ id: newBookId, ...newBook });
      disableAddRequest();
      closeModal();
    }, 20000);
  }

  @action editBook = (newBook, hideEditModalById, activateUserRequest, disableUserRequest) => {
    activateUserRequest();
    const currentBookId = newBook.id;
    setTimeout(() => {
      this.books = this.books.filter((book) => book.id !== currentBookId);
      this.books.push(newBook);
      this.books = this.books.splice('').sort((a, b) => a.id - b.id);
      disableUserRequest();
      hideEditModalById(currentBookId);
    }, 20000);
  }

  @action deleteBook = ({ id },
    hideDeleteModalById,
    activateUserRequest,
    disableUserRequest,
    deleteBookState) => {
    activateUserRequest();
    setTimeout(() => {
      this.books = this.books.filter((book) => book.id !== id);
      deleteBookState(id);
      disableUserRequest();
      hideDeleteModalById(id);
    }, 20000);
  }
}
