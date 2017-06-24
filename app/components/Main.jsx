import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';

import Nav from 'Nav';
import SideNav from 'SideNav';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Nav />
        <div className="callout sticky columns small-2 medium-2 large-2 side-nav">
          <SideNav />
        </div>
        <div className="small-offset-3 small-8 medium-offset-3 medium-6 large-offset-4 large-4 center main">
          <div className="callout">
            <h2 className="title-text">Tech Tac Online Portal</h2>
            <p>Place and manage orders with Tech Tac online</p>
          </div>
          <div className="row">
            <div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Main);