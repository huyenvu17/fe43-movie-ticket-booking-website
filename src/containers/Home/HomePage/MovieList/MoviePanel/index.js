import React, { Component } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
export default class MoviePanel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="moviepanel">
        <div className="row moviepanel__movieitem">
          <div className="col-12 col-md-6 movieitem__info">
            <div className="movieitem__rating"><i className="fa fa-star"></i> <span>5</span></div>
            <div className="heading-md">Fast And Furious</div>
            <div className="text-normal">01.01.2019</div>
            <div className="text-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
            <a href="/" className="btn-linking">
              <span>chi tiết</span>
              {/* <ion-icon name="arrow-forward" size="20" color="#fff"></ion-icon> */}
              <IoIosArrowRoundForward  />
            </a>
          </div>
          <div className="col-12 col-md-6 movieitem__trailer">
            <iframe width={560} height={315} src="https://www.youtube.com/embed/Skpu5HaVkOc" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
        <div className="row moviepanel__slider">
        <Slider {...settings}>
        <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
      </Slider>
        </div>
      </div>
    )
  }
}
