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
      <div key={part._id}>
        <div className="products callout row">
          <div className="columns small-5 medium-5 large-5">
            <div className="imgContainer row">
                <img ref="img" src={part.image} />
            </div>
          </div>
          <div className="columns small-5 medium-5 large-5" style={{float: 'left'}}>
            <h4>{part.name}</h4>
            <ul className="menu vertical">
              <li><span style={{fontWeight: 'bold'}}>Part number: </span>{part.number}</li>
              <li><span style={{fontWeight: 'bold'}}>Price: </span>${part.price}</li>
            </ul>
            <p>{part.description}</p>
            <div className="row cartForm">
              <form onSubmit={this.formSubmit}>
                <ul className="menu">
                  <li><input placeholder="quantity" type="number" ref="quantity" style={{width: '100px', marginRight: '5px'}} /></li>
                  <li><button className="button small">Add to cart</button></li>
                </ul>
              </form>
            </div>
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
