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
          partId: action.partId,
          _id: action._id
        }
      ];
    default:
      return state;
  };
};
