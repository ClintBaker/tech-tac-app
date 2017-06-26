import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import {Link} from 'react-router';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);

  }
  onLogin (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var password = this.refs.password.value;
    var email = this.refs.email.value;

    dispatch(actions.startLogin(email, password));
  }
  render () {
    return (
      <div className="center">
          <div className="callout">
              <h3>Login</h3>
              <form onSubmit={this.onLogin}>
                <input type="text" placeholder="email" ref="email" />
                <input type="password" placeholder="password" ref="password" />
                <button className="button">Submit</button>
              </form>
              <Link to="/signup" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Signup</Link>

            </div>
      </div>
    );
  }
}

export default Redux.connect()(Login);
