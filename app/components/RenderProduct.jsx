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
    var {dispatch, part} = this.props;

    var quantity = this.refs.quantity.value;
    this.refs.quantity.value = '';

    dispatch(actions.addToCart(quantity, part));
  }
  render () {
    var part = this.props.part;
    return (
      <div key={part._id} className="columns small-12 medium-12 large-6">
        <div className="products callout">
          <h4>{part.name}</h4>
          <p><span style={{fontWeight: 'bold'}}>Part number: </span>{part.number}</p>
          <p><span style={{fontWeight: 'bold'}}>Price: </span>${part.price}</p>
          <div>
            <img src={part.image} />
          </div>
          <div className="row">
            <form onSubmit={this.formSubmit}>
              <ul className="menu">
                <li><input placeholder="quantity" type="number" ref="quantity" /></li>
                <li><button className="button small">Add to cart</button></li>
              </ul>
            </form>
          </div>
          <div>

          </div>
        </div>
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
