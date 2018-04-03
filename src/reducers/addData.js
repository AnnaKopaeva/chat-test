import * as types from '../actions/actionTypes'

//images
import User1 from '../images/User1.png'
import User2 from '../images/User2.png'
import User3 from '../images/User3.png'

const initialState = {
  activeDialog: 0,
  userInfo: [{
    id: 0,
    name: "Liza Opolu",
    img: User1,
  }],
  userDialog: [{
      text: "Hello, my name is Liza Opolu",
      is_owner: false,
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
    0: [{
        text: "Hello, my name is Liza Opolu",
        is_owner: false,
      }],
    1: [{
        text: "Hello, my name is Tom Hone",
        is_owner: false,
      }],
    2: [{
        text: "Hello, my name is Sonya Fermi",
        is_owner: false,
      }],
  }
};

// checking for first loading if localStorage has data
// else use default

let newState = localStorage.reduxState ?
  JSON.parse(localStorage.reduxState): initialState;

export default function addData( state = newState, action) {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return {
        ...state,
        dialogs: {
          ...state.dialogs,
          [state.activeDialog] : [
            ...state.dialogs[state.activeDialog],
            {
              text: action.text,
              is_owner: true
            }
          ],
        }
      };
    case types.ADD_BOT_MESSAGE:
      return {
        ...state,
        dialogs: {
          ...state.dialogs,
          [state.activeDialog] : [
            ...state.dialogs[state.activeDialog],
            {
              text: action.text,
              is_owner: false
            }
          ],
        }
      };
    case types.CHANGE_DIALOG:
      return {
        ...state,
        userDialog : state.dialogs[action.key]
      };
    case types.CHANGE_ACTIVE_USER:
      return {
        ...state,
        activeDialog: action.activeDialog
      };
    case types.CHANGE_USER:
      return {
        ...state,
        userInfo : state.userList[action.key]
      };
    default:
      return state
  }
}
