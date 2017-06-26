import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Landing from 'Landing';
import Signup from 'Signup';
import Main from 'Main';
import Cart from 'Cart';
import Orders from 'Orders';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="signup" component={Signup} />
      <Route path="main" component={Main} />
      <Route path="cart" component={Cart} />
      <Route path="orders" component={Orders} />
      <IndexRoute component={Landing} />
    </Route>
  </Router>
);
