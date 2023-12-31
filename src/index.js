import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { rootReducer } from "./Ex_Shoe_Redux/redux/reducer/root";
import { createStore } from "redux";
import { XucXac_reducer } from "./Ex_Tai_Xiu/redux/reducer/XucXac_reducer2";
import { seatHandler } from "./Dat_ve_phim/redux/reducer/ReducerSeat";

// XucXac_reducer,
// rootReducer,
export const store = createStore(
  seatHandler,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
