import { observable, action } from 'mobx';

export interface Book {
  id: number,
  title: string,
  author: string,
  cost: string,
  year: number,
  status: string,
}

export default class BooksStore {
  @observable books: Book[] = [
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

  @action addBook = (
    book: Book, 
    closeModal: Function, 
    activateAddRequest: Function, 
    disableAddRequest: Function, 
    addBookState: Function,
    ) => {
      const newBookId: number = this.books.length === 0 ? 0 : this.books[this.books.length - 1].id + 1;
      activateAddRequest();
      setTimeout(() => {
        addBookState(newBookId);
        const newBook: Book = {
          ...book,
          id: newBookId,
        }
        this.books.push(newBook);
        disableAddRequest();
        closeModal();
      }, 2000);
  }

  @action editBook = (
    newBook: Book, 
    hideEditModalById: Function, 
    activateUserRequest: Function, 
    disableUserRequest: Function,
    ) => {
      activateUserRequest();
      const currentBookId = newBook.id;
      setTimeout(() => {
        this.books = this.books.filter((book) => book.id !== currentBookId);
        this.books.push(newBook);
        this.books = this.books.sort((a, b) => a.id - b.id);
        disableUserRequest();
        hideEditModalById(currentBookId);
      }, 2000);
  }

  @action deleteBook = (
    id: number,
    hideDeleteModalById: Function,
    activateUserRequest: Function,
    disableUserRequest: Function,
    deleteBookState: Function
    ) => {
      activateUserRequest();
      setTimeout(() => {
        this.books = this.books.filter((book) => book.id !== id);
        deleteBookState(id);
        disableUserRequest();
        hideDeleteModalById(id);
      }, 2000);
  }
}
