import { observable, action } from 'mobx';

export default class UiState {
  @observable addModalIsShow = false;

  @observable userRequest = false;

  @observable booksStateById = {
    0: {
      edit: false,
      delete: false,
    },
    1: {
      edit: false,
      delete: false,
    },
    2: {
      edit: false,
      delete: false,
    },
  };

  @action activateUserRequest = () => {
    this.userRequest = true;
  }

  @action disableUserRequest = () => {
    this.userRequest = false;
  }

  @action addBookState = (id) => {
    this.booksStateById = { ...this.booksStateById, [id]: { edit: false, delete: false } };
  }

  @action showAddModal = () => {
    this.addModalIsShow = true;
  }

  @action hideAddModal = () => {
    this.addModalIsShow = false;
  }

  @action showEditModalById = (id) => {
    this.booksStateById[id].edit = true;
  }

  @action hideEditModalById = (id) => {
    this.booksStateById[id].edit = false;
  }

  @action showDeleteModalById = (id) => {
    this.booksStateById[id].delete = true;
  }

  @action hideDeleteModalById = (id) => {
    this.booksStateById[id].delete = false;
  }
}
