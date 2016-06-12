/* @flow */

import { createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "../features/feed/reducers.js";
import actionsViewReducer from "../features/actions-view/reducers.js";

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

const configureStore = function (initialState: Object = {}): Function {
  //return createStoreWithMiddleware(combineReducers(rootReducer, actionsViewReducer), initialState);
  return createStoreWithMiddleware(combineReducers({
    feed: rootReducer,
    actions: actionsViewReducer
  }), initialState);
};

export default configureStore;
