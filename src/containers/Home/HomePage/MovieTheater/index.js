import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {connect} from 'react-redux';
import * as movieAction from '../../../../redux/actions/QuanLyPhimAction';
class MovieTheater extends Component {
  renderTheaterLogo = (theaterList) => {
    return theaterList.map((theater, index) => {
      return(
          <a key={index} className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
            <img src={theater.logo} />
          </a>
      )
    })
  }
  render() {
    let settings = {
      dots: false,
      infinite: true,
      centerMode: true,
      centerPadding: '10px',
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <div className="container" id="movieTheater">
        <div className="heading-md">lịch chiếu</div>
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {this.renderTheaterLogo(this.props.movieTheater)}
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
          <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
          <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
          <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
        </div>
      </div>

    )
  }
  componentDidMount(){
    this.props.dispatch(movieAction.getMovieScheduleAxios());
  }
}

const mapStateToProps = state => ({
  movieTheater: state.QuanLyPhimReducer.movieTheater
})
export default connect(mapStateToProps)(MovieTheater)
