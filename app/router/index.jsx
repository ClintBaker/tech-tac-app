import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Landing from 'Landing';
import Signup from 'Signup';
import Main from 'Main';
import Cart from 'Cart';
import Orders from 'Orders';
import OrderDetails from 'OrderDetails'
import Profile from 'Profile'

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="signup" component={Signup} />
      <Route path="main" component={Main} />
      <Route path="cart" component={Cart} />
      <Route path="profile" component={Profile} />
      <Route path="orders" component={Orders} />
      <Route path="orders/details" component={OrderDetails} />
      <IndexRoute component={Landing} />
    </Route>
  </Router>
);
