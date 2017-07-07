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
import EditPart from 'EditPart';
import AdminOrders from 'AdminOrders';
import Users from 'Users';
import PartsSearch from 'PartsSearch';

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
      <Route path="edit/part" component={EditPart} />
      <Route path="orders/manage" component={AdminOrders}/>
      <Route path="users" component={Users} />
      <Route path="parts/search" component={PartsSearch} />
      <IndexRoute component={Landing} />
    </Route>
  </Router>
);
