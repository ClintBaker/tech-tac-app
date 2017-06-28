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

export var addToCart = (quantity, partId) => {
  return {
    type: 'ADD_TO_CART',
    quantity,
    partId,
    _id: (partId + (new Date()).getTime())
  }
};

export var getParts = (parts) => {
  return {
    type: 'GET_PARTS',
    parts
  }
};

export var startGetProducts = () => {
  return (dispatch, getState) => {
    const {auth} = getState();
    return axios.get(`${baseURL}/parts`, {
      headers: {'x-auth': auth.token}
    }).then((res) => {
      var parts = res.data.parts;
      dispatch(getParts(parts));
    }).catch((e) => {
      alert(e);
    });
  }
};

export var updateCart = (newCart) => {
  return {
    type: 'UPDATE_CART',
    newCart
  }
};

export var startRemoveFromCart = (id) => {
  return (dispatch, getState) => {
    const {cart} = getState();
    var newCart = [];
    cart.map((part) => {
      if (part._id !== id) {
        return newCart.push(part);
      }
    });
    dispatch(updateCart(newCart));
    alert('Item Successfully Removed');
  };
};

export var clearCart = () => {
  return {
    type: 'CLEAR_CART'
  }
};

export var startNewOrder = (cart) => {
  return (dispatch, getState) => {
    var {auth} = getState();
    var newCart = [];

    cart.map((obj) => {
      newCart.push({_partId: obj._partId, quantity: obj.quantity})
    });

    var data = {
      parts: newCart,
      _companyId: auth.id
    };
    var newData = JSON.stringify(data);

    return axios.post(`${baseURL}/orders`, data, {
      headers: {
        'x-auth': auth.token
      }
    }).then((res) => {
      alert('Successfully placed order');
      dispatch(clearCart());
      dispatch(setOrderDetails(res.data));
      hashHistory.push('/orders/details');
    }).catch((e) => {
      alert('Unable to place order');
    });
  };
};

export var populateOrders = (orders) => {
  return {
    type: 'POPULATE_ORDERS',
    orders
  }
};

export var startPopulateOrders = () => {
  return (dispatch, getState) => {
    var {auth} = getState();

    return axios.get(`${baseURL}/orders`, {
      headers: {
        'x-auth': auth.token
      }
    }).then((res) => {
      dispatch(populateOrders(res.data.orders));
    }).catch((e) => {
      console.log(e);
    });
  };
};

export var setOrderDetails = (order) => {
    return {
      type: 'SET_ORDER_DETAILS',
      order
    }
};

export var updateAuth = (user) => {
  return {
    type: 'UPDATE',
    user
  }
}

export var startUpdateUser = (userData) => {
  return (dispatch, getState) => {
    var {auth} = getState();

    return axios.patch(`${baseURL}/users/${auth.id}`, userData, {
      headers: {
        'x-auth': auth.token
      }
    }).then((res) => {
      dispatch(updateAuth(res.data.user));
      alert('Information updated successfully');
      hashHistory.push('/main');
    }).catch((e) => {
      alert(e);
    });
  }
};
