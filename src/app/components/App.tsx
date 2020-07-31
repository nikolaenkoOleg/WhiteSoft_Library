import React, { ReactElement } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Table from './Table';
import Other from './Other';

const App = (): ReactElement => (
  <Router>
    <Switch>
      <Route exact path="/" component={Table} />
      <Route component={Other} />
    </Switch>
  </Router>
);

export default App;
