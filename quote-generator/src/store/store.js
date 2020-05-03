import {createStore, applyMiddleware ,compose} from "redux";
import thunk from 'redux-thunk'

import reducer from "./reducers/reducer";

const initState = {
  quote: 'tester quote',
  author:'developer'
};

const store =  createStore(
    reducer,
    initState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;