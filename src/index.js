import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import "./index.css";
import * as serviceWorker from "./serviceWorkerRegistration";
import "tachyons";
import App from "./containers/App";
import { searchRobots, requestRobots } from "./reducers";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();