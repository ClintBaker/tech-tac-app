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
