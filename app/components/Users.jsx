import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';

import Nav from 'Nav';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.renderUsers = this.renderUsers.bind(this);

    var {dispatch,} = this.props;

    dispatch(actions.startPopulateUsers());
    dispatch(actions.startPopulateOrdersAdmin());
  }
  renderUsers() {
    var {users, orders} = this.props;
    users.reverse();

    return users.map((user) => {
      var userOrders = orders.filter((order) => {
        return order._companyId === user._id;
      });
      return (
        <tbody key={user._id}>
          <tr>
            <td>{user._id}</td>
            <td>{user.companyName ? user.companyName : 'none'}</td>
            <td>{user.email ? user.email : 'none'}</td>
            <td>{user.phone ? user.phone : 'none'}</td>
            <td>{userOrders.length}</td>
          </tr>
        </tbody>
      );

    })


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
            <h2 className="title-text">Users</h2>
            <p>Manage users</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Orders</th>
              </tr>
            </thead>
            {this.renderUsers()}
          </table>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      users: state.users,
      orders: state.orders
    }
  }
)(Users);
