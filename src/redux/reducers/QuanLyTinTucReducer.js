import * as NewsConst from 'redux/constants/newsConstant';
const stateNews = {
  newsList: [],
  newsDetail: {}
}

export default (state = stateNews, action) => {
  switch (action.type) {
  case NewsConst.GET_NEWS_LIST:
    return { ...state, newsList: action.newsList }
  case NewsConst.GET_NEWS_DETAIL:
    return {...state, newsDetail: action.newsDetail }
  default:
  }
  return { ...state };
}
