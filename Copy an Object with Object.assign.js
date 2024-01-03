// initial state object
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp',
};

// Reducer
const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return;
      Object.assign({}, { state }, { status: 'online' });
    default:
      return state;
  }
};

// Action creator
const wakeUp = () => {
  return {
    type: 'ONLINE',
  };
};

// Store
const store = Redux.createStore(immutableReducer);
