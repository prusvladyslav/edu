import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers/index.js";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(rootReducer, composedEnhancer);
