import React from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { CounterReducer } from "./CounterReducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
/* The redux middleware syntax is a mouthful: 
  a middleware function is a function that returns a function that returns a function. 
  The first function takes the store as a parameter, the second takes a next function as a parameter,
  and the third takes the action dispatched as a parameter.
  The store and action parameters are the current redux store and the action dispatched, respectively. 
  The real magic is the next() function.
  The next() function is what you call to say "this middleware is done executing,
  pass this action to the next middleware". 
  In other words, middleware can be asynchronous.*/

const myLogger = (store) => (next) => (action) => {
  console.log("middleware ran");
  return next(action);
};
const reverseAtTen = (store) => (next) => (action) => {
  /* store parameter have access to two methods 1) dispatch and 2) getState */
  if (store.getState() >= 10) {
    //checking the current state
    return next({ type: "DECREMENT" });
  } else {
    return next(action);
  }
};
// const myLogger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("middleware ran");
//       return next(action);
//     };
//   };
// };
const store = createStore(
  CounterReducer,
  applyMiddleware(myLogger, reverseAtTen, logger)
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
