export var authReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SIGNUP':
      return {
        ...state,
        id: action.userData._id,
        token: action.token,
        isAdmin: action.userData.isAdmin,
        email: action.userData.email,
        companyName: action.userData.companyName,
        phone: action.userData.phone,
        url: action.userData.url,
        contactName: action.userData.contactName,
        address: action.userData.address
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
      return action.orders;
    default:
      return state;
  }
};

export var orderDetailsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_ORDER_DETAILS':
      return action.order;
    default:
      return state;
  }
};
