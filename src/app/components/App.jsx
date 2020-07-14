import React from 'react';
import { render } from 'react-dom';

import Table from './Table.jsx';

export default () => {
  const root = document.querySelector('.root');

  render(
    <Table />,
    root,
  );
};
