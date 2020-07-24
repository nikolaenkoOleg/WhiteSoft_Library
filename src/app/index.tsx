import { render } from 'react-dom';
import * as React from 'react';
import {Provider} from "mobx-react";

import App from './components/App.jsx';
import store from './store'

export default () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('.root'),
  )
};
