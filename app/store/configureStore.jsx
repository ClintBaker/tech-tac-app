import * as redux from 'redux';
import thunk from 'redux-thunk';

import {authReducer, partsReducer, cartReducer, ordersReducer, orderDetailsReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    auth: authReducer,
    parts: partsReducer,
    cart: cartReducer,
    orders: ordersReducer,
    orderDetails: orderDetailsReducer
  });


  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
