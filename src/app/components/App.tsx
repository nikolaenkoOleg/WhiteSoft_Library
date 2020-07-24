import * as React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Table from './Table.js';
import Other from './Other.js';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Table} />
      <Route component={Other} />
    </Switch>
  </Router>
);

export default App;
