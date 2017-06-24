import axios from 'axios';
import {hashHistory} from 'react-router';

const baseURL = 'https://powerful-badlands-45228.herokuapp.com';

export var signup = (id, token, isAdmin) => {
  return {
    type: 'SIGNUP',
    id,
    token,
    isAdmin
  }
};

export var startSignup = (user) => {
  return (dispatch, getState) => {
    return axios.post(`${baseURL}/users`, {
      email: user.email,
      password: user.password
    })
    .then((res) => {
      var id = res.data._id;
      var token = res.headers['x-auth'];
      var isAdmin = false;
      dispatch(signup(id, token, isAdmin));
      hashHistory.push('/main');
    })
    .catch((e) => {
      alert('unable to login');
      hashHistory.push('/signup');
    });
  }
};

export var startLogin = (email, password) => {
  return (dispatch, getState) => {
    return axios.post(`${baseURL}/users/login`, {
      email: email,
      password: password
    }).then((res) => {
      var id = res.data._id;
      var isAdmin = res.data.isAdmin;
      var token = res.headers['x-auth'];
      dispatch(signup(id, token, isAdmin));
      hashHistory.push('/main');
    }).catch((e) => {
      alert('unable to login');
      hashHistory.push('/');
    });
  }
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  }
};

export var startLogout = () => {
  return (dispatch, getState) => {
    const {auth} = getState();
    return axios.delete(`${baseURL}/users/me/token`, {
      headers: {'x-auth': `${auth.token}`}
    }).then((res) => {
      dispatch(logout());
      alert('Successfully logged out');
      hashHistory.push('/');
    }).catch((e) => {
      alert(e);
      hashHistory.push('/');
    })
  }
};
