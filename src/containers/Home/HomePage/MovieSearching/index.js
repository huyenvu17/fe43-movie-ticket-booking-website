import React, { Component } from 'react'
import MotiIllustration from '../../../../content/images/illustrations/movie-illustration.svg';
import MovieSearchForm from './MovieSearchForm';
export default class MovieSearching extends Component {
  render() {
    return (
      <div className="movie-searching">
        <div className="row">
          <div className="col-6 movie-searching__form">
            <MovieSearchForm />
          </div>
          <div className="col-6 movie-searching__illustration">
            <img src={MotiIllustration} />
          </div>
        </div>
      </div>
    )
  }
}
