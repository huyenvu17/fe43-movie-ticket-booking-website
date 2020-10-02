import * as MovieTypes from '../types/QuanLyPhimType';
import * as MovieConst from '../constants/movieContants';
const statePhim = {
  suaPhim: {
    biDanh: "what-s-wrong-with-secretary-kimm",
    danhGia: 10,
    hinhAnh:
      "http://movie0706.cybersoft.edu.vn/hinhanh/what-s-wrong-with-secretary-kimm_gp10.jpg",
    maNhom: "GP10",
    maPhim: 1323,
    moTa:
      "What's Wrong with Secretary Kim? is a 2018 South Korean television series starring Park Seo-joon and Park Min-young. It is based on the novel of the same title by Jung Kyung-yoon which was first published in 2013, which was then serialized into a comic in 2015 via KakaoPage. The series aired on tvN from June 6 to July 26, 2018, on Wednesdays and Thursdays for 16 episodes. ",
    ngayKhoiChieu: "2020-06-16T00:00:00",
    tenPhim: "What's wrong with secretary kimm",
    trailer: "https://www.youtube.com/embed/-ir2IflOHv4",
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
