import {createStore } from "redux";

import reducer from "./reducers/reducer";

const initState = {
  quote: 'tester quote',
  author:'developer'
};




const store =  createStore(reducer,initState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;