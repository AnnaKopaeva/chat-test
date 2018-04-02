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
  userDialog: [
    {
      text: "Hello everyone",
      is_owner: true,
    }, {
      text: "Hey",
      is_owner: false,
    },
  ],
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
    0: [
      {
        text: "Hello everyone",
        is_owner: true,
      }, {
        text: "Hey",
        is_owner: false,
      },
    ],
    1: [
      {
        text: "Hello everyone2",
        is_owner: true,
      }, {
        text: "Hey2",
        is_owner: false,
      },
    ],
    2: [
      {
        text: "Hello everyone3",
        is_owner: true,
      }, {
        text: "Hey3",
        is_owner: false,
      },
    ],
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