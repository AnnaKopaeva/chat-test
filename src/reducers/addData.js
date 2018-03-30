import * as types from '../actions/actionTypes'

//images
import User1 from '../images/User1.png'
import User2 from '../images/User2.png'
import User3 from '../images/User3.png'

const initialState = {
  active: 0,
  userInfo: [{
    id: 0,
    name: "Liza Opolu",
    img: User1,
  }],
  userList: [{
    id: 0,
    name: "Liza Opolu",
    img: User1,
  }, {
    id: 1,
    name: "Tom Hone",
    img: User2,
  }, {
    id: 2,
    name: "Sonya Fermi",
    img: User3,
  }],
  dialogs: {
    0: {},
    1: {},
    2: {},
  }
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
        dialogs: {
          ...action.dialogs,

        }
      };
    case types.CHANGE_ACTIVE_USER:
      return {
        ...state,
        active: action.active
      };
    case types.CHANGE_USER:
      return {
        ...state,
        //removes an element from the array with the selected key
        userInfo : state.userList[action.key]
      };
    default:
      return state
  }
}