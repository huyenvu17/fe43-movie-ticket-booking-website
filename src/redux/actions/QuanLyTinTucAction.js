import * as NewsType from 'redux/types/QuanLyTinTucType';
import {quanLyTinTucServices} from 'services/QuanLyTinTucServices'
export const getNewsListAxios = () => {
  return dispatch => {
    quanLyTinTucServices.layDanhSachTinTuc().then(res => {
      dispatch(NewsType.getNewsListAction(res.data))
    }).catch(error => {
      console.log(error);
    })
  }
}
export const getNewsDetailAxios = (newsId) => {
  return dispatch => {
    quanLyTinTucServices.layChiTietTinTuc(newsId).then(res => {
      dispatch(NewsType.getNewsDetailAction(res.data))
    }).catch(error => {
      console.log(error);
    })
  }
}
