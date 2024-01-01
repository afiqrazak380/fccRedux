// Default State
const defaultState = {
  authenticated: false,
};

// Constants for Action Types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Reducer Function
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

// Redux Store
const store = Redux.createStore(authReducer);

// Action  Creaators using Constant
const loginUser = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};
