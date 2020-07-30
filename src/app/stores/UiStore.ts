import { observable, action } from 'mobx';

interface State {
  id: number,
  state: {
    editable: boolean,
    removable: boolean,
  },
}

export default class UiState {
  @observable addModalIsShow: boolean = false;

  @observable userRequest: boolean = false;

  @observable booksStateById: State[] = [
    {
      id: 0,
      state: {
        editable: false,
        removable: false,
      }
    },
    {
      id: 1,
      state: {
        editable: false,
        removable: false,
      }
    },
    {
      id: 2,
      state: {
        editable: false,
        removable: false,
      }
    },
  ];

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
    this.booksStateById.map((state) => {
      if (state.id === id) {
        return {
          id,
          state: {
            editable: true,
            removable: false,
          },
        }
      }

      return state;
    })
  }

  @action hideEditModalById = (id: number) => {
    this.booksStateById.map((state) => {
      if (state.id === id) {
        return {
          id,
          state: {
            editable: false,
            removable: false,
          },
        }
      }

      return state;
    })
  }

  @action showDeleteModalById = (id: number) => {
    this.booksStateById.map((state) => {
      if (state.id === id) {
        return {
          id,
          state: {
            editable: false,
            removable: true,
          },
        }
      }

      return state;
    })
  }

  @action hideDeleteModalById = (id: number) => {
    this.booksStateById.map((state) => {
      if (state.id === id) {
        return {
          id,
          state: {
            editable: false,
            removable: false,
          },
        }
      }

      return state;
    })
  }
}
