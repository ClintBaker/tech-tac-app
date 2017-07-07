import axios from 'axios';
import {hashHistory} from 'react-router';
import request from 'superagent';

const baseURL = 'https://powerful-badlands-45228.herokuapp.com';

export var signup = (token, userData) => {
  return {
    type: 'SIGNUP',
    userData,
    token
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
      var userData = res.data
      dispatch(signup(token, userData));
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
      var userData = res.data;
      dispatch(signup(token, userData));
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

export var addToCart = (quantity, part) => {
  return {
    type: 'ADD_TO_CART',
    quantity,
    part,
    _id: (part._id + (new Date()).getTime())
  }
};

export var getParts = (parts) => {
  return {
    type: 'GET_PARTS',
    parts
  }
};

export var populateSearchParts = (parts, category) => {
  return {
    type: 'POPULATE_SEARCH_PARTS',
    parts,
    category
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
      console.log(e);
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
      newCart.push({_partId: obj._partId, quantity: obj.quantity, _creator: obj._creator, price: obj.price, number: obj.number, name: obj.name, image: obj.image, subtotal: (obj.quantity * obj.price)})
    });

    var total = 0;
    cart.forEach((obj) => {
      total += (obj.quantity * obj.price);
    });

    var data = {
      parts: newCart,
      _companyId: auth.id,
      total
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

export var populateUsers = (users) => {
  return {
    type: 'POPULATE_USERS',
    users
  }
};

export var startPopulateUsers = () => {
  return (dispatch, getState) => {
    var {auth} = getState();

    return axios.get(`${baseURL}/users`, {
      headers: {
        'x-auth': auth.token
      }
    }).then((res) => {
      dispatch(populateUsers(res.data.users));
    }).catch((e) => {
      console.log(e);
    })
  }
};

export var startPopulateOrdersAdmin = () => {
  return (dispatch, getState) => {
    var {auth} = getState();

    return axios.get(`${baseURL}/orders/all`, {
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
};

export var editOrderDetails = (order) => {
  return (dispatch, getState) => {
    var {auth} = getState();

    return axios.patch(`${baseURL}/orders/${order._id}`, order, {
      headers: {
        'x-auth': auth.token
      }
    }).then((res) => {
      dispatch(startPopulateOrdersAdmin);
      hashHistory.push('/orders/manage');
    }).catch((e) => {
      console.log(e);
    });
  }
};

export var startUpdateUser = (userData) => {
  return (dispatch, getState) => {
    var {auth} = getState();

    return axios.patch(`${baseURL}/users/${auth.id}`, userData, {
      headers: {
        'x-auth': auth.token
      }
    }).then((res) => {
      dispatch(signup(auth.token, res.data.user));
      alert('Information updated successfully');
      hashHistory.push('/main');
    }).catch((e) => {
      console.log(e);
    });
  }
};

export var startCreateProduct = (product) => {
  return (dispatch, getState) => {
    const CLOUDINARY_UPLOAD_PRESET = 'b4ydmdnn';
    const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dmkyqvixg/image/upload';

    let upload = request.post(CLOUDINARY_UPLOAD_URL).field('upload_preset', CLOUDINARY_UPLOAD_PRESET).field('file', product.image);

    upload.end((err, response) => {
      if (err) {
        console.log(err);
      }

      if (response.body.secure_url !== '') {
        var {auth} = getState();
        product.image = response.body.secure_url;
        axios.post(`${baseURL}/parts`, product, {
          headers: {
            'x-auth': auth.token
          }
        }).then((res) => {
          alert('Product created');
          hashHistory.push('/admin/products');
        }).catch((e) => {
          console.log(e);
        });
      } else {
        alert('unable to upload image');
      }
    });
  }
};

export var startDeletePart = (id) => {
  return (dispatch, getState) => {
    var {auth} = getState();
    axios.delete(`${baseURL}/parts/${id}`, {
      headers: {
        'x-auth': auth.token
      }
    }).then((res) => {
      dispatch(startGetProducts());
      alert('Part deleted');
      hashHistory.push('/admin/products');
    }).catch((e) => {
      alert('Unable to delete product');
    });
  }
};

export var setPartDetails = (part) => {
  return {
    type: 'PART_DETAILS',
    part
  }
};

export var startEditProductCategories = (part, id) => {
  return (dispatch, getState) => {
    var {auth} = getState();
    var partCategories;
    if (part.categories && part.categories.length > 0) {
      partCategories = part.categories;
    } else {
      partCategories = [];
    }
    part.categories = partCategories;
    axios.patch(`${baseURL}/parts/${id}`, part, {
      headers: {
        'x-auth': auth.token
      }
    }).then((res) => {
      alert('Category removed');
      dispatch(startGetProducts());
      hashHistory.push('/admin/products');
    }).catch((e) => {
      console.log(e);
    });
  }
}

export var startEditProduct = (part, id) => {
  return (dispatch, getState) => {

    if (part.image) {
      const CLOUDINARY_UPLOAD_PRESET = 'b4ydmdnn';
      const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dmkyqvixg/image/upload';

      let upload = request.post(CLOUDINARY_UPLOAD_URL).field('upload_preset', CLOUDINARY_UPLOAD_PRESET).field('file', part.image);

      upload.end((err, response) => {
        if (err) {
          console.log(err);
        }

        if (response.body.secure_url !== '') {
          var {auth} = getState();
          part.image = response.body.secure_url;
          axios.patch(`${baseURL}/parts/${id}`, part, {
            headers: {
              'x-auth': auth.token
            }
          }).then((res) => {
            alert('Part edited');
            dispatch(startGetProducts());
            hashHistory.push('/admin/products');
          }).catch((e) => {
            console.log(e);
          });
        } else {
          alert('unable to upload image');
        }
      });
    } else {
      var {auth} = getState();
      axios.patch(`${baseURL}/parts/${id}`, part, {
        headers: {
          'x-auth': auth.token
        }
      }).then((res) => {
        dispatch(startGetProducts());
        alert('Part edited');
        hashHistory.push('/admin/products');
      }).catch((e) => {
        alert('Unable to edit part');
      });
    }

  }
}
