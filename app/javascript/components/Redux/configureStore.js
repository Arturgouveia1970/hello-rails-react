import { confireStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import greetingReducer from "./greeting";

const rootReducer = combineReducers({
  message: greetingReducer,
});

const store = configureStore(rootReducer, {}, applyMiddleware(thunk, logger));
export default store;