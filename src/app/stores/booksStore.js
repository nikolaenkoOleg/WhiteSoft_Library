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
    const newBookId = this.books[this.books.length - 1].id + 1;
    activateAddRequest();
    setTimeout(() => {
      addBookState(newBookId);
      this.books.push({ id: newBookId, ...newBook });
      closeModal();
      disableAddRequest();
    }, 2000);
  }

  @action editBook = (newBook, hideEditModalById, activateEditRequest, disableEditRequest) => {
    activateEditRequest();
    const currentBookId = newBook.id;
    setTimeout(() => {
      this.books = this.books.filter((book) => book.id !== currentBookId);
      this.books.push(newBook);
      this.books = this.books.splice('').sort((a, b) => a.id - b.id);
      hideEditModalById(currentBookId);
      disableEditRequest();
    }, 2000);
  }

  @action deleteBook = (id) => {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
