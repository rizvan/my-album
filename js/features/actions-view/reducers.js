/* @flow */

import { combineReducers } from "redux";
import * as types from "./actions";

const reducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
  case types.OPEN_ACTIONS_MENU:
    return Object.assign({}, state, {
      isOpen: true
    });
  case types.CLOSE_ACTION_MENU:
    return Object.assign({}, state, {
      isOpen: false
    });
  default:
    return state;
  }
};

export default reducer;
