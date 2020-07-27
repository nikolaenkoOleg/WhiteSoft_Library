import BooksStore from './booksStore';
import UiStore from './UiStore';

export default class MainStore {
  constructor() {
    this.booksStore = new BooksStore();
    this.uiStore = new UiStore();
  }
}
