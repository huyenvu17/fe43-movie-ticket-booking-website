import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {connect} from 'react-redux';
import * as movieAction from 'redux/actions/QuanLyPhimAction';
import MovieItem from './MovieItem';
var moment = require('moment');
class MoviePanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      movieItem: {},
      activeSlide: 0,
      activeSlide2: 0
    }
  }
  showMovieItemInfo = (movieItemRender) => {
    this.setState({movieItem: movieItemRender})
  }
  renderMovieItem = () =>{
    return this.props.movieList.map((movieItem, index) => {
      return (
        <div className="slider__item" key={index} onClick={() => this.showMovieItemInfo(movieItem)}>
            <img src={movieItem.hinhAnh} className="img-fluid" alt={movieItem.hinhAnh}/>
        </div>
      )
    })
  }
  render() {
    let settings = {
      dots: false,
      infinite: true,
      centerMode: true,
      className: "center",
      lazyLoad: true,
      centerPadding: '10px',
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      beforeChange: (prev, next) => {
        this.setState({ currentSlide: next });
      },
    };
    return (
      <div className="moviepanel">
        <div className="container">
          {this.state.currentSlide &&
            <MovieItem movieItem={this.state.movieItem} />
          }
        </div>
        <div className="row moviepanel__slider">
          <div className="container">
            <div className="col-12 slider__list">
              <Slider {...settings}>
                {this.renderMovieItem()}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    this.props.dispatch(movieAction.getMovieListAxios());
  }
}

const mapStateToProps = state => ({
  movieList: state.QuanLyPhimReducer.movieList
})
export default connect(mapStateToProps)(MoviePanel)
