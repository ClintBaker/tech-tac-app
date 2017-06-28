import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import Products from 'Products';
import moment from 'moment';
import {Link} from 'react-router';

import Nav from 'Nav';
import SideNav from 'SideNav';

class RenderOrder extends React.Component {
  constructor(props) {
    super(props);
    this.renderParts = this.renderParts.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  renderParts() {
    var {order} = this.props;
    return order.parts.map((part) => (
      <ul key={part._id} className="inlineList">
        <li><span style={{fontWeight: 'bold'}}>Part</span>: {part._id}</li>
        <li><span style={{fontWeight: 'bold'}}>Quantity</span> {part.quantity}</li>
      </ul>
    ))
  }
  onClick() {
    var {order, dispatch} = this.props;
    dispatch(actions.setOrderDetails(order));
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
          <td>{order.status}</td>
          <td>{date}</td>
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
