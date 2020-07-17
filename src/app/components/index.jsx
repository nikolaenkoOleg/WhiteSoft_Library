import { render } from 'react-dom';
import React from 'react';

import App from './App.jsx';

const Main = () => {
  render(
    <App />,
    document.querySelector('.root'),
  );
};

export default Main;
