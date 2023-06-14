import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore } from "redux";
import App from "./App";
import "./index.css";
import reducer from "./reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
