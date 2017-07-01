import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Landing from 'Landing';
import Signup from 'Signup';
import Main from 'Main';
import Cart from 'Cart';
import Orders from 'Orders';
import OrderDetails from 'OrderDetails';
import Profile from 'Profile';
import ManageProductsMain from 'ManageProductsMain';
import CreateProducts from 'CreateProducts';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="signup" component={Signup} />
      <Route path="main" component={Main} />
      <Route path="cart" component={Cart} />
      <Route path="profile" component={Profile} />
      <Route path="orders" component={Orders} />
      <Route path="admin/products" component={ManageProductsMain} />
      <Route path="orders/details" component={OrderDetails} />
      <Route path="create/products" component={CreateProducts} />
      <IndexRoute component={Landing} />
    </Route>
  </Router>
);
