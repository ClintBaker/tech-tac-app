import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import Products from 'Products';

import Nav from 'Nav';
import SideNav from 'SideNav';
import RenderOrder from 'RenderOrder';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.renderOrders = this.renderOrders.bind(this);

    var {dispatch,} = this.props;

    dispatch(actions.startPopulateOrders());
  }
  renderOrders() {
    var orderNum = 0;
    var {orders} = this.props;

    return orders.map((order) => (
      <RenderOrder orderNum={orderNum++} order={order} key={orderNum++} />
    ))


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
          <table>
            <thead>
              <tr>
                <th width="50"></th>
                <th width="200">Order Number</th>
                <th>Parts</th>
                <th width="150">Status</th>
                <th width="150">Order Date</th>
              </tr>
            </thead>
            {this.renderOrders()}
          </table>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      orders: state.orders
    }
  }
)(Orders);
