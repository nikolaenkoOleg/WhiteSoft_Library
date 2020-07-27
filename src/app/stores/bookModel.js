import { observable, action } from 'mobx';

export default class Book {
  @observable title = '';

  @observable author = '';

  @observable cost = '';

  @observable year = '';

  @observable status = 'В наличии';

  @action setTitle = (title) => {
    this.title = title;
  }

  @action setAuthor = (author) => {
    this.author = author;
  }

  @action setCost = (cost) => {
    this.cost = cost;
  }

  @action setYear = (year) => {
    this.year = year;
  }

  @action setStatus = (status) => {
    this.status = status;
  }

  @action getBook = () => ({
    title: this.title,
    author: this.author,
    cost: this.cost,
    year: this.year,
    status: this.status,
  })
}
