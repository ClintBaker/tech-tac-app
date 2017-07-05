import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import Products from 'Products';
import moment from 'moment';
import {Link} from 'react-router';

import Nav from 'Nav';

class OrderDetailsAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.renderOrderParts = this.renderOrderParts.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.onSent = this.onSent.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.renderStatusButtons = this.renderStatusButtons.bind(this);
    this.onPending = this.onPending.bind(this);
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
  onCancel(e) {
    e.preventDefault();
    var {orderDetails, dispatch} = this.props;
    orderDetails.status = 'cancelled';
    dispatch(actions.editOrderDetails(orderDetails));
  }
  onComplete(e) {
    e.preventDefault();
    var {orderDetails, dispatch} = this.props;
    orderDetails.status = 'completed';
    dispatch(actions.editOrderDetails(orderDetails));
  }
  onSent(e) {
    e.preventDefault();
    var {orderDetails, dispatch} = this.props;
    orderDetails.status = 'sent';
    dispatch(actions.editOrderDetails(orderDetails));
  }
  onPending(e) {
    e.preventDefault();
    var {orderDetails, dispatch} = this.props;
    orderDetails.status = 'pending';
    dispatch(actions.editOrderDetails(orderDetails));
  }
  renderStatusButtons() {
    var order = this.props.orderDetails;

    if (order.status == 'pending') {
      return (
        <div style={{float: 'right'}}>
          <ul className="menu">
            <li><span>Change order status: </span></li>
            <li><a className="button small" onClick={this.onSent}>sent</a></li>
            <li><a className="success button small" onClick={this.onComplete}>completed</a></li>
            <li><a className="alert button small" onClick={this.onCancel}>cancelled</a></li>
          </ul>
        </div>
      );
    } else if (order.status == 'sent') {
      return (
        <div style={{float: 'right'}}>
          <ul className="menu">
            <li><span>Change order status: </span></li>
            <li><a className="button small secondary" onClick={this.onPending}>pending</a></li>
            <li><a className="success button small" onClick={this.onComplete}>completed</a></li>
            <li><a className="alert button small" onClick={this.onCancel}>cancelled</a></li>
          </ul>
        </div>
      );
    } else if (order.status == 'completed') {
      return (
        <div style={{float: 'right'}}>
          <ul className="menu">
            <li><span>Change order status: </span></li>
            <li><a className="button small secondary" onClick={this.onPending}>pending</a></li>
            <li><a className="button small" onClick={this.onSent}>sent</a></li>
            <li><a className="alert button small" onClick={this.onCancel}>cancelled</a></li>
          </ul>
        </div>
      );
    } else if (order.status == 'cancelled') {
      return (
        <div style={{float: 'right'}}>
          <ul className="menu">
            <li><span>Change order status: </span></li>
            <li><a className="button small secondary" onClick={this.onPending}>pending</a></li>
            <li><a className="button small" onClick={this.onSent}>sent</a></li>
            <li><a className="success button small" onClick={this.onComplete}>completed</a></li>
          </ul>
        </div>
      );
    }
  }
  render () {
    var {orderDetails} = this.props;
    return (
      <div>
        <Nav />
        <div className="small-offset-2 small-8 medium-offset-3 medium-6 large-offset-3 large-6 main padMain">
          <div>
            <Link className="button small" to="/orders">Back to orders</Link>
          </div>
          {this.renderStatusButtons()}
          <h3>Order Review</h3>
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

export default connect(
  (state) => {
    return {
      orders: state.orders,
      orderDetails: state.orderDetails
    }
  }
)(OrderDetailsAdmin);
