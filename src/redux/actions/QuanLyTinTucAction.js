import * as NewsType from 'redux/types/QuanLyTinTucType';
import {quanLyTinTucServices} from 'services/QuanLyTinTucServices'
export const getNewsListAxios = () => {
  return dispatch => {
    quanLyTinTucServices.layDanhSachTinTuc().then(res => {
      console.log('action ', res.data)
      dispatch(NewsType.getNewsListAction(res.data))
    }).catch(error => {
      console.log(error);
    })
  }
}
