import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import Products from 'Products';
import * as Moment from 'moment';

import Nav from 'Nav';
import SideNav from 'SideNav';

class RenderOrder extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    var {order, orderNum} = this.props;
    var timestamp = order._id.toString().substring(0,8);
    var date = Moment.unix(timestamp).format("MMM Do YYYY, h:mm a");
    return (
      <tbody>
        <tr>
          <td>{order.Num}</td>
          <td>{order._id}</td>
          <td>This is will be all parts and quantities b.</td>
          <td>{order.status}</td>
          <td>{date}</td>
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
