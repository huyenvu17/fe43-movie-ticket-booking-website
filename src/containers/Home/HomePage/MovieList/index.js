import React, { Component } from 'react'
import MoviePanel from './MoviePanel'

export default class MovieList extends Component {
  render() {
    return (
      <div className="movielist">
        <div className="container">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="movie-showing-tab" data-toggle="pill" href="#movie-showing" role="tab" aria-controls="movie-showing" aria-selected="true">đang chiếu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="movie-upcoming-tab" data-toggle="pill" href="#movie-upcoming" role="tab" aria-controls="movie-upcoming" aria-selected="false">sắp chiếu</a>
            </li>
          </ul>
        </div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="movie-showing" role="tabpanel" aria-labelledby="movie-showing-tab">
              <MoviePanel />
            </div>
            <div className="tab-pane fade" id="movie-upcoming" role="tabpanel" aria-labelledby="movie-upcoming-tab">
              <MoviePanel />
            </div>
          </div>
        </div>
    )
  }
}
