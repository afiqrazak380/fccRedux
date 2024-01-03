// Reducer
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      let array = [...state, action.todo];
      return array;
    default:
      return state;
  }
};

// Action creator
const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo,
  };
};

//Store
const store = Redux.createStore(immutableReducer);
