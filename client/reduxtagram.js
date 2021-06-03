import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

const route = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(route, document.getElementById("root"));
