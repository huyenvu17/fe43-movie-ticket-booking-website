import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as newsAction from 'redux/actions/QuanLyTinTucAction';
import {
  Link
} from "react-router-dom";
class LatestNews extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    this.props.dispatch(newsAction.getNewsListAxios());
  }
  render() {
    console.log(this.props.newsList)
    return (
      <div className="container latestnews" id="latestNews">
        <div className="heading-md">tin tức điện ảnh</div>
        <div className="row latestnews__wrapper">
          {this.props.newsList.map((newsItem)=>{
            return(
              <Link className="col-6 col-sm-4 latestnews__newsitem" key={newsItem.id}>
              <img src={newsItem.hinhAnh1} className="newsitem__img" />
              <div className="newsitem__intro">
                <div>{newsItem.ngayDang}</div>
                <div>{newsItem.tieuDe}</div>
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
