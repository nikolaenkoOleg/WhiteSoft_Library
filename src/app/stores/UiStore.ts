import { observable, action } from 'mobx';


interface booksStateById {
  id: number,
  state: {
    editable: boolean,
    removable: boolean,
  },
}

export default class UiState {
  @observable addModalIsShow: boolean = false;

  @observable userRequest: boolean = false;

  // @observable booksStateById: booksStateById[] = [
  //   {
  //     id: 0,
  //     state: {
  //       editable: false,
  //       removable: false,
  //     }
  //   },
  //   {
  //     id: 1,
  //     state: {
  //       editable: false,
  //       removable: false,
  //     }
  //   },
  //   {
  //     id: 2,
  //     state: {
  //       editable: false,
  //       removable: false,
  //     }
  //   },
  // ];

  @observable booksStateById: object = {
    
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

  @action addBookState = (id: number) => {
    const bookState = {
      id,
      state: {
        editable: false,
        removable: false,
      }
    }

    this.booksStateById.push(bookState);
  }

  @action deleteBookState = (id: number) => {
    delete this.booksStateById[id];
  }

  @action showAddModal = () => {
    this.addModalIsShow = true;
  }

  @action hideAddModal = () => {
    this.addModalIsShow = false;
  }

  @action showEditModalById = (id: number) => {
    
  }

  @action hideEditModalById = (id: number) => {
    this.booksStateById[id].edit = false;
  }

  @action showDeleteModalById = (id: number) => {
    this.booksStateById[id].delete = true;
  }

  @action hideDeleteModalById = (id: number) => {
    this.booksStateById[id].delete = false;
  }
}
