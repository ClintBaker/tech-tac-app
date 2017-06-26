import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.renderAdmin = this.renderAdmin.bind(this);
  }
  onClick(e) {
    const {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }
  renderAdmin() {
    var {auth} = this.props

    if(auth.isAdmin) {
      return (
        <div>
          <h5>Admin Panel</h5>
          <ul className="menu vertical">
            <li><a href="#">Manage Products</a></li>
          </ul>
        </div>
      );
    }
  }
  render () {
    return (
        <div>
            <ul className="menu vertical">
              <li><a href="#">My Profile</a></li>
              <li><Link to="/cart" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>My Cart</Link></li>
              <li><a href="#">Manage Orders</a></li>
              <li><a onClick={this.onClick}>Logout</a></li>
            </ul>
            {this.renderAdmin()}
        </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      auth: state.auth
    }
  }
)(SideNav);
