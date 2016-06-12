/* @flow */

import { combineReducers } from "redux";
import * as types from "./actions";

const reducer = (state = { isFetching: false, dataSource: [] }, action) => {
  switch (action.type) {
  case types.REQUEST_DATA:
    return Object.assign({}, state, {
      isFetching: true
    });
  case types.RECEIVE_DATA:

    return Object.assign({}, state, {
      dataSource: action.data
    });
  default:
    return state;
  }
};

export default reducer;
