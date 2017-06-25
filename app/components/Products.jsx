import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';

import RenderProduct from 'RenderProduct';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.renderProducts = this.renderProducts.bind(this);
    this.formSubmit = this.formSubmit.bind(this);

    var {dispatch} = this.props;
    dispatch(actions.startGetProducts());
  }
  formSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;

    var quantity = this.refs.quantity.value;
    var partNumber = this.refs.partNumber.value;
    this.refs.partNumber.value = '';
    this.refs.quantity.value = '';
    console.log('quantity:' + quantity);
    console.log('partNumber' + this.refs.partNumber.value);

    dispatch(actions.addToCart(quantity, partNumber));
  }
  renderProducts() {
    var {parts} = this.props;

    return parts.map((part) => (
      <RenderProduct part={part} key={part._id} />
    ))
  }
  render () {
    return (
      <div>
        {this.renderProducts()}
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
)(Products);
