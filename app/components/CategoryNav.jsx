import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import {hashHistory} from 'react-router';

class CategoryNav extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    var {category, dispatch, parts} = this.props;

    var newParts = [];
    parts.map((part) => {
      if (part.categories && part.categories.length > 0) {
        if (_.includes(part.categories, category)) {
          newParts.push(part);
        }
      }
    });

    dispatch(actions.populateSearchParts(newParts, category));
    hashHistory.push('/parts/search');

  }
  render () {
    var {category, searchTerm} = this.props;
    if (category && searchTerm && category === searchTerm) {
      return (
        <li><a style={{fontWeight: 'bold'}} onClick={this.onClick}>{category}</a></li>
      );
    } else {
      return (
        <li><a onClick={this.onClick}>{category}</a></li>
      );
    }

  }
}

export default connect(
  (state) => {
    return {
      parts: state.parts,
      searchTerm: state.searchTerm
    }
  }
)(CategoryNav);
