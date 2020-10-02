import React, { Component } from "react";
import "../../../content/styles/user/signinsignup.css";
import Register from "./Register";
import { userLogin } from "../../../Config/config";
import SignInForm from "./SignIn/SignInForm";
export default class SignInSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidePannelActive: false,
    };
  }
  switchSignUp = (props) => {
    this.setState({ slidePannelActive: !this.state.slidePannelActive });
  };
  render() {
    return (
      <div
        className={
          this.state.slidePannelActive
            ? "signin-wrapper right-panel-active"
            : "signin-wrapper"
        }
      >
        <div className="signin-container" id="container">
          <div className="form-container sign-up-container">
            <Register navigator={this.props}/>
           </div>
          <div className="form-container sign-in-container">
           <SignInForm navigator={this.props}/>
           {/* <SignIn/> */}
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Chào Mừng!</h1>
                <p>kết nối MoTi và cùng khám phá thế giới phim sống động</p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => this.switchSignUp()}
                >
                  Đăng Nhập
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Bạn Chưa Có Tài Khoản!</h1>
                <p>Cùng đăng ký để nhận ưu đãi thành viên</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => this.switchSignUp()}
                >
                  Đăng Ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
