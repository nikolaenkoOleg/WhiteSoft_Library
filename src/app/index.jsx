import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'mobx-react';

import App from './components/App.jsx';
import store from './store/index.js';

export default () => {
  render(
    <Provider>
      <App store={store}/>,
    </Provider>,
    document.querySelector('.root'),
  );
};
