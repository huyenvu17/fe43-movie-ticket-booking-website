import * as NewsConst from 'redux/constants/newsConstant';
const stateNews = {
  newsList: []
}

export default (state = stateNews, action) => {
  switch (action.type) {
  case NewsConst.GET_NEWS_LIST:
    return { ...state, newsList: action.newsList }
  default:
  }
  return { ...state };
}
