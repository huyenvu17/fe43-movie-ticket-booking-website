import * as MovieTypes from '../types/QuanLyPhimType';
import * as MovieConst from '../constants/movieContants';
const statePhim = {
  suaPhim: {
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
  movieList: [{
    biDanh: "phim-khong-ten",
    danhGia: 10,
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/phim-khong-ten_gp01.jpg",
    maNhom: "GP01",
    maPhim: 1314,
    moTa: "AngryBird Cosplay",
    ngayKhoiChieu: "2020-02-06T00:00:00",
    tenPhim: "Phim Không tên",
    trailer: "AngryBird Cosplay",
  }]
};

export default (state = statePhim, action) => {
  switch (action.type) {
    case MovieConst.GET_MOVIE_LIST: {
      return {...state, movieList: action.movieList}
    }
    case MovieTypes.XEM_CHI_TIET: {
      statePhim.suaPhim = action.value;
      return { ...state };
    }
    default:
  }
  return { ...state };
};
