import { observable, action } from 'mobx';

class BooksStore {
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

  @action addBook = (book) => {
    this.books.push(book);
  }

  @action deleteBook = (id) => {
    this.books = this.books.filter((book) => book.id !== id);
  }
}

const store = new BooksStore();

export default store;
