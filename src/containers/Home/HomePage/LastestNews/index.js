import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as newsAction from 'redux/actions/QuanLyTinTucAction';
import { Link } from "react-router-dom";
import { FaLessThanEqual } from 'react-icons/fa';
class LatestNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    this.props.dispatch(newsAction.getNewsListAxios());
  }
  render() {
    return (
      <div className="container latestnews" id="latestNews">
        <div className="heading-md">tin tức điện ảnh</div>
        <div className="row latestnews__wrapper">
          {this.props.newsList.map((newsItem) => {
            return (
              <Link className="col-6 col-sm-4" key={newsItem.id} to={`/news-detail/${newsItem.id}`}>
                <div className="latestnews__newsitem">
                  <img src={newsItem.hinhAnh1} className="newsitem__img" />
                  <div className="newsitem__intro">
                    <div>{newsItem.ngayDang}</div>
                    <div className="intro__title">{newsItem.tieuDe}</div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  newsList: state.QuanLyTinTucReducer.newsList
})
export default connect(mapStateToProps)(LatestNews)
