import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import Products from 'Products';

import Nav from 'Nav';
import SideNav from 'SideNav';

class Orders extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Nav />
        <div className="callout sticky columns small-2 medium-2 large-2 side-nav">
          <SideNav />
        </div>
        <div className="small-offset-3 small-8 medium-offset-3 medium-6 large-offset-3 large-7 center main">
          <div className="callout">
            <h2 className="title-text">Orders</h2>
            <p>Manage your orders</p>
          </div>
          <div className="row">
            My Orders
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      cart: state.cart
    }
  }
)(Orders);