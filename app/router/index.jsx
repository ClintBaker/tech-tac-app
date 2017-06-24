import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Landing from 'Landing';
import Signup from 'Signup';
import Main from 'Main';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="signup" component={Signup} />
      <Route path="main" component={Main} />
      <IndexRoute component={Landing} />
    </Route>
  </Router>
);
