import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './components/App.jsx';
import reducer from './slises';

const Main = () => {
  const store = configureStore({
    reducer,
    preloadedState: {
      books: [
        {
          id: 0,
          title: 'Война и мир',
          author: 'Лев Николаевич Толстой',
          cost: '2200',
          year: 1867,
          status: 'В наличии',
        },
        {
          id: 1,
          title: 'Мастер и Маргарита',
          author: 'Михаил Афанасьевич Булгаков',
          cost: '1200',
          year: 1966,
          status: 'Нет в наличии',
        },
        {
          id: 2,
          title: 'Униженные и оскорблённые',
          author: 'Фёдор Михайлович Достоевский',
          cost: '1340',
          year: 1861,
          status: 'В наличии',
        },
      ],
      editBookState: 'none',
      deleteookState: 'none',
      addBookState: 'none',
    },
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('.root'),
  );
};

export default Main;
