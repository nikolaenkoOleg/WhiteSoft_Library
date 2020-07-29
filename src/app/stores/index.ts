import BooksStore from './booksStore';
import UiStore from './UiStore';

export default class MainStore {
  booksStore: BooksStore;
  uiStore: UiStore;
  constructor() {
    this.booksStore = new BooksStore();
    this.uiStore = new UiStore();
  }
}
