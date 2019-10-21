import { FETCH_MOVIES} from '../actions/types';

export default function movieReducer(state = [], action) {
  switch (action.type) {
      case FETCH_MOVIES:
      return action.movies;
    default:
      return state;
  }
}