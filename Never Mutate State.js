// Action type constant for adding a to-do item
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

// Redicer function for managing the state immutably
const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // Create a new array with the existing todos and the new todo appended
      return [...state, action.todo];
    default:
      return state;
  }
};

// Action creator function for adding a to-do item
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo, // The new to-do item to be added
  };
};

// Redux store creation with the immutableReducer
const store = Redux.createStore(immutableReducer);
