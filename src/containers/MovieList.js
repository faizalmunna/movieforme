import React from 'react';
import { connect } from 'react-redux';
import Movie from '../components/Movie';
// import { deletePost } from '../actions';
import { Link } from 'react-router-dom'
import '../../src/App.css'
import Overdrive from 'react-overdrive';

function MovieList({ movies }) {
  if(!movies.length) {
    return (
      <div>
        No movies
      </div>
    )
  }
  return (
    <div>
      {movies.map((movie, i) => {
//       console.log(movie)
        return (
          <div key={i} className="row movie-row">
          <div className="col-md-12"><h3>{movie.row_name}</h3></div>
          <div className="col-md-12 styleout1">
          <div className="col-md-12 styleout2">
            {movie.data.map((m,inx) => {
              return(
                <Link to={`/${m.id}`}>
                    <Overdrive id={`${m.id}`}>
                      <div className="col-md-4">
                        <Movie movie={ m } key={ inx } />
                      </div>
                    </Overdrive>
                </Link>    
                )
            })}
          </div>
          </div>
          </div>
        );
      })}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);