import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 footer__left">
              <div className="heading-md">MOTI</div>
              <div className="footer__left__content">MoTi is an online movie booking platform where you can find tickets and enjoy thousands of wonderful movies.</div>
              <div className="footer__left_copyright"> 2020 <i class="fa fa-copyright"></i> MOTI team</div>
            </div>
            <div className="col-12 col-sm-6 footer__right">
              <div className="heading-md">Follow us</div>
              <div className="footer__right__icons">
              <i class="fab fa-facebook-f fb"></i>
              <i class="fab fa-twitter twt"></i>
              <i class="fab fa-google-plus-g google"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
