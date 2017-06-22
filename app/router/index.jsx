import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Landing from 'Landing';
import Signup from 'Signup';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="signup" component={Signup} />
      <IndexRoute component={Landing} />
    </Route>
  </Router>
);
