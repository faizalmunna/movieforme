import { combineReducers } from 'redux';
import movies from './movieReducer';
import movie from './SingleMovieReducer';

export default combineReducers({
    movies: movies,
    movie : movie
});