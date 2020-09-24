import * as MovieConst from '../constants/movieContants';
export const XEM_CHI_TIET = "XEM_CHI_TIET";
export const getMovieListAction = (movieList) => ({
  type: MovieConst.GET_MOVIE_LIST,
  movieList
})
