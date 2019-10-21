import { FETCH_MOVIES } from './types';
import { FETCH_MOVIE } from './types';
import axios from 'axios';

const apiUrl = 'https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20';
const singelUrl = 'https://cdn-discover.hooq.tv/v1.2/discover/titles/'
export const fetchMovies = (movies) => {
  return {
    type: FETCH_MOVIES,
    movies
  }
};
export const fetchMovie = (movie) => {
  return {
    type: FETCH_MOVIE,
    movie
  }
};
export const fetchAllMovies = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        const filteredDAta = response.data.data
        .filter((t) => t.type === 'Multi-Title-Manual-Curation')
console.log(filteredDAta)
        dispatch(fetchMovies(filteredDAta))
      })
      .catch(error => {
        throw(error);
      });
  };
};
// single movie action 
export const fetchSingleMoview = (id) => {
  return (dispatch) => {
    return axios.get(`${singelUrl}${id}`)
      .then(response => {
        console.log(response)
        dispatch(fetchMovie(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
