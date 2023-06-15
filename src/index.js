import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import App from "./App";
import "./index.css";
import reducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
