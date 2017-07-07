import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';

import RenderProduct from 'RenderProduct';

class PartsSearchRender extends React.Component {
  constructor(props) {
    super(props);
    this.renderProducts = this.renderProducts.bind(this);

    var {dispatch} = this.props;
    dispatch(actions.startGetProducts());
  }
  renderProducts() {
    var {parts} = this.props;

    return parts.map((part) => (
      <RenderProduct part={part} key={part._id} />
    ))
  }
  render () {
    return (
      <div className="columns large-10 medium-7 small-7">
        {this.renderProducts()}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      parts: state.searchParts
    }
  }
)(PartsSearchRender);
