import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';

import RenderCartItem from 'RenderCartItem';

class CartItems extends React.Component {
  constructor(props) {
    super(props);
    this.renderCartItems = this.renderCartItems.bind(this);

    var {dispatch} = this.props;
    dispatch(actions.startGetProducts());
  }
  renderCartItems() {
    var {cart} = this.props;

    return cart.map((part) => (
      <RenderCartItem part={part} key={part._id} />
    ))
  }
  render () {
    return (
      <div>
        {this.renderCartItems()}
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
)(CartItems);
