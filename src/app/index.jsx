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
          title: '123',
          author: 'oleg',
          cost: '100',
          year: 2020,
          status: 'В наличии',
        },
        {
          id: 1,
          title: '1234',
          author: 'ivan',
          cost: '200',
          year: 2010,
          status: 'Нет в наличии',
        },
      ],
      changeBookState: 'none',
      deleteBookState: 'none',
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
