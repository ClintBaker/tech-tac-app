import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';
import ManageProducts from 'ManageProducts';

import Nav from 'Nav';
import SideNav from 'SideNav';

class ManageProductsMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Nav />
        <div className="small-offset-3 small-8 medium-offset-3 medium-6 large-offset-3 large-6 center main padMain">
          <div className="callout">
            <h2 className="title-text">Manage Products</h2>
          </div>
          <div className="row">
            <div>
              <ManageProducts />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ManageProductsMain);
