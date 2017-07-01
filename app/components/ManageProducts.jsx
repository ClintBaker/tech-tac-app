import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';

import ManageRenderProduct from 'ManageRenderProduct';

class ManageProducts extends React.Component {
  constructor(props) {
    super(props);
    this.renderProducts = this.renderProducts.bind(this);

    var {dispatch} = this.props;
    dispatch(actions.startGetProducts());
  }
  renderProducts() {
    var {parts} = this.props;

    return parts.map((part) => (
      <ManageRenderProduct part={part} key={part._id} />
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
)(ManageProducts);
