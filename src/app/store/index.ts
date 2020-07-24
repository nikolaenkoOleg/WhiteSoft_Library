import { observable, action } from 'mobx';
import { createContext } from 'react';
// import axios from 'axios';

// const getBooks = async (): Promise<Array<object>> => {
//   const baseUrl = 'http://localhost:7700';
//   const response = await axios.get(`${baseUrl}/src/books.json`);
//   const books = JSON.parse(response.data);

//   return books;
// }

// const books = getBooks();

// так и не смог разобарться с тем, как загрузить эти книги, используя ts

interface Book {
  id: number,
  title: string,
  author: string,
  cost: number,
  year: number,
  status: string,
};

class BooksStore {
  @observable books: Book[] = [
    {
      id: 0,
      title: 'Война и мир',
      author: 'Лев Николаевич Толстой',
      cost: 2200,
      year: 1867,
      status: 'В наличии',
    },
    {
      id: 1,
      title: 'Мастер и Маргарита',
      author: 'Михаил Афанасьевич Булгаков',
      cost: 1200,
      year: 1966,
      status: 'Нет в наличии',
    },
    {
      id: 2,
      title: 'Униженные и оскорблённые',
      author: 'Фёдор Михайлович Достоевский',
      cost: 1340,
      year: 1861,
      status: 'В наличии',
    },
  ]

  @action addBook = (book: Book) => {
    this.books.push(book);
  }

  @action deleteBook = (id: number) => {
    this.books = this.books.filter((book) => book.id !== id);
  }
}

export default new BooksStore();
