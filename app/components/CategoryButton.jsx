import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

class CategoryButton extends React.Component {
  constructor (props) {
    super(props);
    this.onCategorySubmit = this.onCategorySubmit.bind(this);
    this.state = {};
  }
  onCategorySubmit() {
    var {dispatch, partDetails, category} = this.props;

    var part = {};
    var newCategories = [];
    partDetails.categories.map((cat) => {
      if (cat !== category) {
        newCategories.push(cat);
      };
    });
    if (newCategories && newCategories.length > 1) {
      part.categories = newCategories;
    }

    dispatch(actions.startEditProductCategories(part, partDetails._id));
  }
  render () {
    var {auth, partDetails, category} = this.props;
    return (
      <div>
        <button className="button alert" onClick={this.onCategorySubmit}>{category}</button>
      </div>
    );
  }
}

export default Redux.connect(
  (state) => {
    return {
      auth: state.auth,
      partDetails: state.partDetails
    }
  }
)(CategoryButton);
