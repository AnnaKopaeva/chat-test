import * as types from './actionTypes';

export function addMessage(dialogs, data) {
  return {
    type: types.ADD_MESSAGE,
    dialogs,
    data
  }
}

export function changeUser(userInfo, key) {
  return {
    type: types.CHANGE_USER,
    userInfo,
    key
  }
}

export function changeActiveUser(active) {
  return {
    type: types.CHANGE_ACTIVE_USER,
    active
  }
}
