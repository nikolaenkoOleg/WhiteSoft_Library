import { createSlice } from '@reduxjs/toolkit';

const librarySlice = createSlice({
  name: 'library',
  reducers: {
    changeBookRequest(state) {
      return { ...state, changeBookState: 'request' };
    },
    changeBookSuccess(state, { payload: { newBook } }) {
      const { books } = state;
      const filteredBooks = books.filter(({ id }) => id !== newBook.id);
      return {
        ...state,
        books: [...filteredBooks, newBook],
        changeBookState: 'succes',
      };
    },
    changeBookFailure(state) {
      return { ...state, changeBookState: 'error' };
    },
    deleteBookRequest(state) {
      return { ...state, deleteBookState: 'request' };
    },
    deleteBookSuccess(state, { payload: { id } }) {
      const { books } = state;
      const filteredBooks = books.filter((book) => book.id !== id);
      return {
        ...state,
        books: [...filteredBooks],
      };
    },
    deleteBookFailure(state) {
      return { ...state, deleteBookState: 'error' };
    },
    addBookRequest(state) {
      return { ...state, addBookState: 'request' };
    },
    addBookSuccess(state, { payload: { newBook } }) {
      const { books } = state;
      const newBookId = books[books.length - 1].id + 1;
      return {
        ...state,
        books: [...books, { id: newBookId, ...newBook }],
        addBookState: 'succes',
      };
    },
    addBookFailure(state) {
      return { ...state, addBookState: 'error' };
    },
  },
});

const { actions, reducer } = librarySlice;

export const {
  changeBookRequest,
  changeBookSuccess,
  changeBookFailure,
  deleteBookRequest,
  deleteBookSuccess,
  deleteBookFailure,
  addBookRequest,
  addBookSuccess,
  addBookFailure,
} = actions;

export default reducer;
