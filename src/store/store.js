//import MovieReducer  from "../store/reducer";
import {createStore, applyMiddleware } from "redux";
import combineReducers from "./allreducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
  

const store  = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
