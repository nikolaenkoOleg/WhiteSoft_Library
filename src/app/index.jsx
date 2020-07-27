import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

import App from './components/App.jsx';
import MainStore from './stores';

const store = new MainStore();

export default () => {
  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector('.root'),
  );
};
