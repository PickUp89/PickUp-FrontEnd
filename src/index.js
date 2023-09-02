import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store from "./store";
import App from "./App";

// <Provider store={store}>
//   <App />
// </Provider>,
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
