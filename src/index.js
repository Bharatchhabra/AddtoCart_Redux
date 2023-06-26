import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import rootReducer from "./service/reducers/root-reducer";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
