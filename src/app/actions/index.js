import {
  changeBookRequest,
  changeBookSuccess,
  changeBookFailure,
  deleteBookRequest,
  deleteBookSuccess,
  deleteBookFailure,
  addBookRequest,
  addBookSuccess,
  addBookFailure,
} from '../slises';

const changeBookAction = (newBook) => (dispatch) => {
  dispatch(changeBookRequest());
  try {
    setTimeout(() => {
      dispatch(changeBookSuccess(newBook));
    }, 1500);
  } catch (e) {
    dispatch(changeBookFailure());
    console.log(e);
  }
};

const deleteBookAction = (id) => (dispatch) => {
  dispatch(deleteBookRequest());
  try {
    setTimeout(() => {
      dispatch(deleteBookSuccess(id));
    }, 1500);
  } catch (e) {
    dispatch(deleteBookFailure());
    console.log(e);
  }
};

const addBookAction = (newBook) => (dispatch) => {
  dispatch(addBookRequest());
  try {
    setTimeout(() => {
      dispatch(addBookSuccess(newBook));
    }, 1500);
  } catch (e) {
    dispatch(addBookFailure());
    console.log(e);
  }
};

export { changeBookAction, deleteBookAction, addBookAction };
