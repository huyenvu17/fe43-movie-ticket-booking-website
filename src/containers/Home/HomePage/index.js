import React, { Component } from 'react'
import MovieList from './MovieList'
import MovieSearching from './MovieSearching'
import {Fragment} from 'react';
import MovieSchedule from './MovieSchedule';
export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <MovieSearching />
        <MovieList />
        <MovieSchedule />
      </Fragment>
    )
  }
}
