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
            <li><Link to="/admin/products" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span style={{color: '#00457c'}}>Manage Products</span></Link></li>
            <li><Link to="/create/products" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span style={{color: '#00457c'}}>Create New Product</span></Link></li>
            <li><Link to="/admin/products" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span style={{color: '#00457c'}}>Manage Orders</span></Link></li>
            <li><Link to="/admin/products" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span style={{color: '#00457c'}}>Manage Users</span></Link></li>
          </ul>
        </div>
      );
    }
  }
  render () {
    var {cart, auth} = this.props;
    var cartNum = cart.length;
    return (
        <div>
          {this.renderAdmin()}
            <ul className="menu vertical">
              <li style={{fontWeight: 'bold'}}>{auth.companyName ? auth.companyName : auth.email}</li>
              <li><Link to="/profile" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span style={{color: '#00457c'}}>Company Profile</span></Link></li>
              <li><Link to="/cart" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span style={{color: '#00457c'}}>Cart</span> {cartNum > 0 ? <span className="badge success">{cartNum}</span> : ''}</Link></li>
              <li><Link to="/orders" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span style={{color: '#00457c'}}>Manage Orders</span></Link></li>
              <li><a onClick={this.onClick}><span style={{color: '#00457c'}}>Logout</span></a></li>
            </ul>
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
