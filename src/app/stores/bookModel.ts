import { observable, action } from 'mobx';

export default class Book {
  @observable title = '';

  @observable author = '';

  @observable cost = 0;

  @observable year = 0;

  @observable status = 'В наличии';

  @action setTitle = (title: string): void => {
    this.title = title;
  }

  @action setAuthor = (author: string): void => {
    this.author = author;
  }

  @action setCost = (cost: number): void => {
    this.cost = cost;
  }

  @action setYear = (year: number): void => {
    this.year = year;
  }

  @action setStatus = (status: string): void => {
    this.status = status;
  }

  @action getBook = (): Record<string, unknown> => ({
    title: this.title,
    author: this.author,
    cost: this.cost,
    year: this.year,
    status: this.status,
  })
}
