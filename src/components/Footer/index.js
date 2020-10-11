import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 footer__left">
              <div className="heading-md">MOTI</div>
              <div className="footer__left__content">MoTi is an online movie booking platform where you can find tickets and enjoy thousands of wonderful movies.</div>
              <div className="footer__left_copyright"> 2020 <i className="fa fa-copyright"></i> MOTI team</div>
            </div>
            <div className="col-12 col-sm-6 footer__right">
              <div className="heading-md">Follow us</div>
              <div className="footer__right__icons">
              <NavLink to="https://www.facebook.com/" ><i className="fab fa-facebook-f fb"></i></NavLink>
              <NavLink to="https://twitter.com/"><i className="fab fa-twitter twt"></i></NavLink>
              <NavLink to="https://www.google.com/"><i className="fab fa-google-plus-g google"></i></NavLink> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
