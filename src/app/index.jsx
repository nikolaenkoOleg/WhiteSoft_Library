import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

import App from './components/App.jsx';
import BooksStore from './store';

const store = new BooksStore();

export default () => {
  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector('.root'),
  );
};
