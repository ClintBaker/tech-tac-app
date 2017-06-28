import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';
import {connect} from 'react-redux';

import Login from 'Login';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.renderLoginSignup = this.renderLoginSignup.bind(this);
  }
  renderLoginSignup() {
    return (
      <Login />
    )
  }
  render () {
    return (
      <div>
        <div className="small-centered small-10 medium-6 large-3 center landingFlex">
          {/* <div className="callout">
            <h2>Welcome to the Tech Tac online portal</h2>
            <p>Place and manage orders with Tech Tac online</p>
          </div> */}


          <Login />
        </div>
      </div>
    );
  }
}

export default connect()(Landing);
