import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';

class RenderProduct extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }
  formSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;

    var quantity = this.refs.quantity.value;
    var partNumber = this.refs.partNumber.value;
    this.refs.partNumber.value = '';
    this.refs.quantity.value = '';
    console.log('quantity:' + quantity);
    console.log('partNumber' + partNumber);

    dispatch(actions.addToCart(quantity, partNumber));
  }
  render () {
    var part = this.props.part;
    return (
      <div key={part._id} className="columns small-12 medium-6 large-4 callout">
        <h4>{part.name}</h4>
        <p>{part.description}</p>
        <form onSubmit={this.formSubmit}>
          <input placeholder="quantity" type="number" ref="quantity" />
          <input type="hidden" value={part._id} ref="partNumber" />
          <button className="button small">Add to cart</button>
        </form>
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
)(RenderProduct);
