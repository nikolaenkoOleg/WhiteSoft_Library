import { observable, action } from 'mobx';

interface State {
  id: number,
  state: {
    editable: boolean,
    removable: boolean,
  },
}

export default class UiState {
  @observable addModalIsShow = false;

  @observable userRequest = false;

  @observable booksStateById: State[] = [
    {
      id: 0,
      state: {
        editable: false,
        removable: false,
      },
    },
    {
      id: 1,
      state: {
        editable: false,
        removable: false,
      },
    },
    {
      id: 2,
      state: {
        editable: false,
        removable: false,
      },
    },
  ];

  @action activateUserRequest = (): void => {
    this.userRequest = true;
  }

  @action disableUserRequest = (): void => {
    this.userRequest = false;
  }

  @action addBookState = (id: number): void => {
    const bookState = {
      id,
      state: {
        editable: false,
        removable: false,
      },
    };

    this.booksStateById.push(bookState);
  }

  @action deleteBookState = (id: number): void => {
    this.booksStateById = this.booksStateById.filter((state) => state.id !== id);
  }

  @action showAddModal = (): void => {
    this.addModalIsShow = true;
  }

  @action hideAddModal = (): void => {
    this.addModalIsShow = false;
  }

  @action showEditModalById = (id: number): void => {
    this.booksStateById = this.booksStateById.map((state) => {
      if (state.id === id) {
        return {
          id,
          state: {
            editable: true,
            removable: false,
          },
        };
      }

      return state;
    });
  }

  @action hideEditModalById = (id: number): void => {
    this.booksStateById = this.booksStateById.map((state) => {
      if (state.id === id) {
        return {
          id,
          state: {
            editable: false,
            removable: false,
          },
        };
      }

      return state;
    });
  }

  @action showDeleteModalById = (id: number): void => {
    this.booksStateById = this.booksStateById.map((state) => {
      if (state.id === id) {
        return {
          id,
          state: {
            editable: false,
            removable: true,
          },
        };
      }

      return state;
    });
  }

  @action hideDeleteModalById = (id: number): void => {
    this.booksStateById = this.booksStateById.map((state) => {
      if (state.id === id) {
        return {
          id,
          state: {
            editable: false,
            removable: false,
          },
        };
      }

      return state;
    });
  }
}
