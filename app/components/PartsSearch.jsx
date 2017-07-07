import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import Products from 'PartsSearchRender';
import CategoryNav from 'CategoryNav';
import {Link} from 'react-router';
import _ from 'lodash';

import Nav from 'Nav';

class PartsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.renderSideNav = this.renderSideNav.bind(this);
  }
  renderSideNav() {
    var {parts, realParts} = this.props;

    var newCategories = [];
    realParts.map((part) => {
      if (part.categories) {
        part.categories.map((category) => {
          if (!_.includes(newCategories, category)) {
            newCategories = newCategories.concat(category);
          }
        });
      }
    });

    return newCategories.map((category) => (
        <CategoryNav key={category + ((Math.random() * 1000).toString())} category={category} />
    ))
  }
  render () {
    return (
      <div>
        <Nav />
        <div className="pad">

          {/* <div className="bg-color"></div> */}

          {/* <div className="callout sticky columns small-2 medium-2 large-2 side-nav">
            <SideNav />
          </div> */}
          <div className="small-offset-2 small-8 medium-offset-3 large-offset-3 medium-6 large-6 main">
            <div className="callout">
              <h2 className="title-text">Products</h2>
            </div>
              <div className="row">
                <div className="columns large-2" style={{float: 'left', height: '100vh'}}>
                  <ul className="menu vertical">
                    <li>CATEGORIES</li>
                    <li><Link to="/main" activeStyle={{fontWeight: 'bold'}}>All</Link></li>
                    {this.renderSideNav()}
                  </ul>
                </div>
                <Products />
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
      parts: state.searchParts,
      realParts: state.parts
    }
  }
)(PartsSearch);
