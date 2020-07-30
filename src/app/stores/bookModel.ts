import { observable, action } from 'mobx';

export default class Book {
  @observable title: string = '';

  @observable author: string = '';

  @observable cost: string = '';

  @observable year: number = 0;

  @observable status: string = 'В наличии';

  @action setTitle = (title: string) => {
    this.title = title;
  }

  @action setAuthor = (author: string) => {
    this.author = author;
  }

  @action setCost = (cost: string) => {
    this.cost = cost;
  }

  @action setYear = (year: number) => {
    this.year = year;
  }

  @action setStatus = (status: string) => {
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
