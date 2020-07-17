import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Table from './Table.jsx';
import Other from './Other.jsx';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Table} />
      <Route component={Other} />
    </Switch>
  </Router>
);

export default App;
