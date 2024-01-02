// Constant
const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';

//
const requestingData = () => {
  return { type: REQUESTING_DATA };
};
const receivedData = (data) => {
  return { type: RECEIVED_DATA, users: data.users };
};

// Define asyncronous request
const handleAsync = () => {
  return function (dispatch) {
    // Dispatch request action here
    dispatch(requestingData());

    setTimeout(function () {
      let data = {
        users: ['Jeff', 'William', 'Alice'],
      };
      // Dispatch received data action here
      dispatch(receivedData(data));
    }, 2500);
  };
};

// Default state
const defaultState = {
  fetching: false,
  users: [],
};

// Reducer
const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: [],
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

// // Import necessary Redux and Redux Thunk functions
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// // Define your initial state and reducer
// const initialState = {
//   data: null,
//   loading: false,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'FETCH_DATA_REQUEST':
//       return {
//         ...state,
//         loading: true,
//       };
//     case 'FETCH_DATA_SUCCESS':
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // Create the Redux store with Thunk middleware
// const store = createStore(reducer, applyMiddleware(thunk));

// // Define an asynchronous action creator using Thunk
// const fetchData = () => {
//   return (dispatch) => {
//     // Dispatch an action to indicate the start of the asynchronous request
//     dispatch({ type: 'FETCH_DATA_REQUEST' });

//     // Simulate an asynchronous request with setTimeout
//     setTimeout(() => {
//       const fakeData = { message: 'Data received successfully!' };

//       // Dispatch an action with the received data
//       dispatch({
//         type: 'FETCH_DATA_SUCCESS',
//         payload: fakeData,
//       });
//     }, 2000); // Simulating a 2-second delay, replace with your actual asynchronous call
//   };
// };

// // Dispatch the asynchronous action
// store.dispatch(fetchData());
