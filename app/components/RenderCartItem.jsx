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
      <tr key={part._id}>
        <td>{part._partId}</td>
        <td>{part.quantity}</td>
        <td>${(part.price * part.quantity).toLocaleString()}</td>
        <td><button className="button small alert" onClick={this.removeFromCart}>Remove from cart</button></td>
      </tr>
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
