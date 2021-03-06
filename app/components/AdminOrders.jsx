import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import Products from 'Products';

import Nav from 'Nav';
import SideNav from 'SideNav';
import RenderOrder from 'RenderOrder';

class AdminOrders extends React.Component {
  constructor(props) {
    super(props);
    this.renderOrders = this.renderOrders.bind(this);

    var {dispatch,} = this.props;

    dispatch(actions.startPopulateOrdersAdmin());
  }
  renderOrders() {
    var orderNum = 1;
    var {orders} = this.props;
    orders.reverse();

    return orders.map((order) => (
      <RenderOrder orderNum={orderNum++} order={order} key={orderNum} />
    ))


  }
  render () {
    return (
      <div>
        <Nav />
        {/* <div className="callout sticky columns small-2 medium-2 large-2 side-nav">
          <SideNav />
        </div> */}
        <div className="small-offset-3 small-8 medium-offset-3 medium-6 large-offset-3 large-6 main padMain">
          <div className="callout">
            <h2 className="title-text">Orders</h2>
            <p>Manage orders</p>
          </div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Order Number</th>
                <th>Vendor</th>
                <th>Status</th>
                <th>Order Date</th>
                <th>Total</th>
                <th>Order Details</th>
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
)(AdminOrders);
