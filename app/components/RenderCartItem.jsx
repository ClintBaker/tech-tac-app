import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';

class RenderCartItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeFromCart = this.removeFromCart.bind(this);
  }
  removeFromCart(e) {
    e.preventDefault();
    var {dispatch, part} = this.props;

    dispatch(actions.startRemoveFromCart(part._id));
  }
  render () {
    var part = this.props.part;
    return (
      <div key={part._id} className="columns small-12 medium-6 large-4 callout">
        <p>{part._id}</p>
        <p>{part.partId}</p>
        <p>Cart: {part.quantity}</p>
        <button className="button small alert" onClick={this.removeFromCart}>Remove from cart</button>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      parts: state.parts
    }
  }
)(RenderCartItem);
