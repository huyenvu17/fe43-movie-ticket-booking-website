import * as MovieTypes from 'redux/types/QuanLyPhimType';
import * as MovieConst from 'redux/constants/movieContants';
const statePhim = {
  suaPhim: {
    biDanh: "what-s-wrong-with-secretary-kimm",
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    hinhAnh: "",
    trailer: "",
    moTa: "",
    ngayKhoiChieu: "",
    maNhom: "",
    danhGia: "",
  },
  movieList: [],
  movieTheater: []
};

export default (state = statePhim, action) => {
  switch (action.type) {
    case MovieConst.GET_MOVIE_LIST: {
      return {...state, movieList: action.movieList}
    }
    case MovieConst.GET_MOVIE_THEATER: {
      return {...state, movieTheater: action.movieTheater}
    }
    case MovieTypes.XEM_CHI_TIET: {
      statePhim.suaPhim = action.value;
      return { ...state };
    }
    default:
  }
  return { ...state };
};
