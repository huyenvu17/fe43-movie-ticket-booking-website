import * as NewsConst from 'redux/constants/newsConstant';
export const getNewsListAction = (newsList) => ({
  type: NewsConst.GET_NEWS_LIST,
  newsList
})
export const getNewsDetailAction = (newsDetail) => ({
  type: NewsConst.GET_NEWS_DETAIL,
  newsDetail
})
