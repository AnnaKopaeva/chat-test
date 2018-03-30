import * as types from '../actions/actionTypes'

const initialState = {
  message: [],
};

// checking for first loading if localStorage has data
// else use default

// let newState = localStorage.reduxState ?
//   JSON.parse(localStorage.reduxState): initialState;

export default function addData( state = initialState, action) {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return {
        ...state,
        data: action.message,
      };
    default:
      return state
  }
}