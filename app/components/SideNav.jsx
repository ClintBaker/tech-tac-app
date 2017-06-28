import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.renderAdmin = this.renderAdmin.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    var {dispatch} = this.props;

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
    var {cart} = this.props;
    var cartNum = cart.length;
    return (
        <div>
            <ul className="menu vertical">
              <li style={{fontWeight: 'bold'}}>Username</li>
              <li><Link to="/profile" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Company Profile</Link></li>
              <li><Link to="/cart" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Cart {cartNum > 0 ? <span className="badge success">{cartNum}</span> : ''}</Link></li>
              <li><Link to="/orders" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Manage Orders</Link></li>
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
      auth: state.auth,
      cart: state.cart
    }
  }
)(SideNav);
