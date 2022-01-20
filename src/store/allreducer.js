import {combineReducers} from "redux";
import MovieReducer from "./reducer";
import getMovieReducer from "./getData_reducer";




export default combineReducers ({
    actionOnMovie: MovieReducer,
	allmovies: getMovieReducer
})