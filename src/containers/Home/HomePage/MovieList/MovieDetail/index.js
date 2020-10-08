import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as movieAction from 'redux/actions/QuanLyPhimAction';
import moment from 'moment';
class MovieDetail extends Component {
  componentDidMount(){
    const { maPhim } = this.props.match.params;
    this.props.dispatch(movieAction.getMovieDetailAxios(maPhim))
  }
  render() {
    let movieDetail = this.props.movieDetail;
    let ngayChieu = moment(movieDetail.ngayKhoiChieu).format('hh:mm A');
    console.log(movieDetail)
    return (
      <div className="moviedetail">
        <div className="moviedetail__posterwrapper">
          <img src={movieDetail.hinhAnh} className="posterwrapper__image"/>
          <div className="moviedetail__info">
            <div>
              <img src={movieDetail.hinhAnh} className="info__image" />
            </div>
            <div className="info__items">
              <div>{ngayChieu}</div>
              <div>{movieDetail.tenPhim}</div>
              <div>{movieDetail.moTa}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movieDetail: state.QuanLyPhimReducer.movieDetail
})
export default connect(mapStateToProps)(MovieDetail)
