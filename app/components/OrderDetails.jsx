import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import Products from 'Products';
import moment from 'moment';
import {Link} from 'react-router';

import Nav from 'Nav';
import OrderDetailsAdmin from 'OrderDetailsAdmin';

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.renderOrderParts = this.renderOrderParts.bind(this);
  }
  renderOrderParts() {
    var {orderDetails} = this.props;
    var parts = orderDetails.parts;

    return parts.map((part) => (

        <tr key={part._id}>
          <td>{part.name}</td>
          <td>{part._partId}</td>
          <td>${part.price}</td>
          <td>{part.quantity}</td>
          <td>${part.subtotal ? part.subtotal.toLocaleString() : '0'}</td>
        </tr>

    ))
  }
  render () {
    var {orderDetails, auth} = this.props;
    if (auth.isAdmin) {
      return (
        <OrderDetailsAdmin />
      );
    } else {
      return (
        <div>
          <Nav />
          <div className="small-offset-2 small-8 medium-offset-3 medium-6 large-offset-3 large-6 main padMain">
            <div>
              <Link className="button small" to="/orders">Back to orders</Link>
            </div>
            <div className="callout">
              <h4 className="title-text">Order Number: {orderDetails._id}</h4>
            </div>
            <div className="callout">
              <ul className="inlineList">
                <li><span style={{fontWeight: 'bold'}}>Order status: </span>{orderDetails.status}</li>
                <li><span style={{fontWeight: 'bold'}}>Order date: </span>{moment(Number(orderDetails.createdAt)).format("MMMM Do YYYY, h:mm a")}</li>
              </ul>
              <h5>Order parts:</h5>
              <table>
                <thead>
                  <tr>
                    <th>Part</th>
                    <th>ID</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderOrderParts()}
                </tbody>
              </table>
              <h5 style={{fontWeight: 'bold'}}>Total: {orderDetails.total ? "$" + orderDetails.total.toLocaleString() : 'none'}</h5>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  (state) => {
    return {
      orders: state.orders,
      orderDetails: state.orderDetails,
      auth: state.auth
    }
  }
)(OrderDetails);
