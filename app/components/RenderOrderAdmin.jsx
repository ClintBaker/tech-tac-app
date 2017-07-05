import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import Products from 'Products';
import moment from 'moment';
import {Link} from 'react-router';

import Nav from 'Nav';

class RenderOrder extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.populateStatus = this.populateStatus.bind(this);
  }
  onClick() {
    var {order, dispatch} = this.props;
    dispatch(actions.setOrderDetails(order));
  }
  onCancel(e) {
    e.preventDefault();
    var {order, dispatch} = this.props;
    order.status = 'cancelled';
    dispatch(actions.editOrderDetails(order));
  }
  populateStatus() {
    var {order, dispatch} = this.props;
    if (order.status === 'pending') {
      return (
        <td>
          {order.status}
          <a onClick={this.onCancel}>sent</a>
          <a className="success" onClick={this.onCancel}>completed</a>
          <a className="alert" onClick={this.onCancel}>cancelled</a>
        </td>
      );
    }
  }
  render () {
    var {order, orderNum} = this.props;
    if (order.createdAt) {
      var date = moment(Number(order.createdAt)).format("MM/DD/YY");
    } else {
      var date = 'none';
    }
    return (
      <tbody>
        <tr>
          <td>{orderNum}</td>
          <td>{order._id}</td>
          <td>Tech Tac</td>
          <td>{this.populateStatus()}</td>
          <td>{date}</td>
          <td>{order.total ? '$' + order.total.toLocaleString() : ''}</td>
          <td>
            <Link className="button small" to="/orders/details" onClick={this.onClick}>Details</Link>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default connect(
  (state) => {
    return {
      orders: state.orders
    }
  }
)(RenderOrder);
