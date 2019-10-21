/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchSingleMoview} from '../actions/index'
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';
class MovieDetail extends Component {
  componentDidMount() {
  	const id = this.props.match.params.id
  	if(id){
		this.props.fetchSingleMoview(id)
  	}
  }
  render() {
  	console.log(this.props.movie)
  	const {movie} = this.props
    return this.props.movie ? (
      <div>
      <header>
      	<Link to={`/`}>
    		BACK
  		</Link>
      </header>
          <Overdrive id={`${movie.id}`}>
            <img src={movie.images[0].url} alt={this.props.movie.title} />
          </Overdrive>
      		<div>{this.props.movie.title}</div>
      </div>
    ) : null;
  }
}
const mapStateToProps = state => ({
	movie: state.movie.movie
});
const mapDispatchToProps = dispatch => bindActionCreators({fetchSingleMoview}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

