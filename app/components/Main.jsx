import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import Products from 'Products';

import Nav from 'Nav';
import SideNav from 'SideNav';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="pad">
        <Nav />
        {/* <div className="bg-color"></div> */}

        {/* <div className="callout sticky columns small-2 medium-2 large-2 side-nav">
          <SideNav />
        </div> */}
        <div className="small-offset-2 small-8 medium-offset-3 large-offset-3 medium-6 large-6 main">
          <div className="callout">
            <h2 className="title-text">Products</h2>
          </div>
            <div>
              <Products />
            </div>
        </div>
      </div>
    );
  }
}

export default connect()(Main);
