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
        <img className="margin" style={{marginBottom: '20px'}} src="http://techtacco.com/skin/frontend/techtacco/default/images/logo.png"/>
        <form className="margin" onSubmit={this.onLogin}>
          <input className="radius" type="text" placeholder="email" ref="email" style={{borderColor: '#a9a9a9'}}/>
          <input className="radius" type="password" placeholder="password" ref="password" style={{borderColor: '#a9a9a9'}} />
          <button className="button expanded radius" style={{backgroundColor: "#00457c"}}>Log in</button>
        </form>
        <p>Need an account?</p>
        <button className="button expanded hollow radius" style={{border: 'none', backgroundColor: '#eaeaea'}}>
          <Link to="/signup" activeClassName="active" activeStyle={{fontWeight: 'bold'}} style={{color: "#000", fontWeight: 'bold'}}>Signup</Link>
        </button>

      </div>
    );
  }
}

export default Redux.connect()(Login);
