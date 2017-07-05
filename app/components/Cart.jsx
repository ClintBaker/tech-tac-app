import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import Products from 'Products';

import Nav from 'Nav';
import SideNav from 'SideNav';
import CartItems from 'CartItems';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.submitOrder = this.submitOrder.bind(this);
    this.renderCartItems = this.renderCartItems.bind(this);
  }
  submitOrder(e) {
    e.preventDefault();
    var {dispatch, cart} = this.props;
    dispatch(actions.startNewOrder(cart));
  }
  renderCartItems() {
    var {cart} = this.props;
    if (cart.length > 0) {
      return (
        <div>
          <div className="row">
            <div>
              <CartItems />
            </div>
          </div>
          <div className="row">
            <div>
              <button className="button large success" onClick={this.submitOrder}>Submit Order</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <p>There are currently no items in your cart.</p>
      );
    }
  }
  render () {
    var {cart} = this.props;
    return (
      <div>
        <Nav />
        <div className="small-offset-2 small-8 medium-offset-3 medium-6 large-offset-3 large-6 main padMain">
          <div className="callout">
            <h2 className="title-text">Cart</h2>
            <p>Manage your cart before generating an order</p>
          </div>
          {this.renderCartItems()}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      cart: state.cart
    }
  }
)(Cart);
