import * as MovieConst from 'redux/constants/movieContants';
export const XEM_CHI_TIET = "XEM_CHI_TIET";
export const getMovieListAction = (movieList) => ({
  type: MovieConst.GET_MOVIE_LIST,
  movieList
})
export const getMovieTheaterAction = (movieTheater) => ({
  type: MovieConst.GET_MOVIE_THEATER,
  movieTheater
})
