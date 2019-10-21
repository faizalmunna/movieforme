import { FETCH_MOVIE} from '../actions/types';
const initialState = {
	movie: null
}
export default function singleMovieReducer(state = initialState, action) {
  switch (action.type) {
      case FETCH_MOVIE:
      return {...state, movie: action.movie}
    default:
      return state;
  }
}