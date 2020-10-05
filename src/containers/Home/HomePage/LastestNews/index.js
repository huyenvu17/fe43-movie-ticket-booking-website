import React, { Component } from 'react'

export default class LatestNews extends Component {
  render() {
    return (
      <div className="container latestnews" id="latestNews">
        <div className="heading-md">tin tức điện ảnh</div>
        <div className="row latestnews__wrapper">
          <div className="col-6 col-sm-4 latestnews__item">
              <img src="https://picsum.photos/200/300" class />
              <div className="col-6 col-sm-4 latestnews__item-intro">
                <div>01.04.2020</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
              </div>
          </div>
          <div className="col-6 col-sm-4 latestnews__item">
              <img src="https://picsum.photos/200/300" />
              <div className="col-6 col-sm-4 latestnews__item-intro">
                <div>01.04.2020</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
              </div>
          </div>
          <div className="col-6 col-sm-4 latestnews__item">
              <img src="https://picsum.photos/200/300" />
              <div className="col-6 col-sm-4 latestnews__item-intro">
                <div>01.04.2020</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
