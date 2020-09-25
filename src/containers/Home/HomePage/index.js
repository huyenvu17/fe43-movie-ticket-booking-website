import React, { Component } from 'react'
import MovieList from './MovieList'
import MovieSearching from './MovieSearching'
import {Fragment} from 'react';
import MovieTheater from './MovieTheater';
import LatestNews from './LastestNews';
export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <MovieSearching />
        <MovieList />
        <MovieTheater />
        <LatestNews />
      </Fragment>
    )
  }
}
