export var authReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SIGNUP':
      return {
        ...state,
        id: action.id,
        token: action.token,
        isAdmin: action.isAdmin
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  };
};

export var partsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_PARTS':
      return action.parts;
    default:
      return state;
  }
};

export var cartReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          quantity: action.quantity,
          _partId: action.partId,
          _id: action._id
        }
      ];
    case 'UPDATE_CART':
      return action.newCart;
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  };
};

export var ordersReducer = (state = [], action) => {
  switch(action.type) {
    case 'POPULATE_ORDERS':
      return action.orders
    default:
      return state;
  }
};
