import * as types from './actionTypes';

export function addMessage(text) {
  return {
    type: types.ADD_MESSAGE,
    text,
  }
}

export function changeDialog(dialogs, key) {
  return {
    type: types.CHANGE_DIALOG,
    dialogs,
    key
  }
}

export function changeUser(userInfo, key) {
  return {
    type: types.CHANGE_USER,
    userInfo,
    key
  }
}

export function changeActiveUser(activeDialog) {
  return {
    type: types.CHANGE_ACTIVE_USER,
    activeDialog
  }
}
