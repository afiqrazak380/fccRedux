// Reduce
const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      let removeState = [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];
      return removeState;
    default:
      return state;
  }
};

// Action creator
const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index,
  };
};

// Store
const store = Redux.createStore(immutableReducer);
