import { createStore, applyMiddleware, compose } from "redux";
import Reducers from "./Reducers";
import thunk from "redux-thunk";
import initialState from "./initialState";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(Reducers, initialState, composeEnhancers(applyMiddleware(thunk)));
  // process.env.NODE_ENV !== "production"
  //   ? createStore(Reducers, initialState, composeEnhancers(applyMiddleware(thunk)))
  //   : createStore(Reducers, initialState);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept("./Reducers", () => {
    const nextReducer = require("./Reducers").default; // eslint-disable-line global-require
    store.replaceReducer(nextReducer);
  });
}

export default store;
