import React, { Component } from 'react'
import MoviePanel from './MoviePanel'

export default class MovieList extends Component {
  render() {
    return (
      <div className="movielist" id="movieList">
        <MoviePanel />
      </div>
    )
  }
}
