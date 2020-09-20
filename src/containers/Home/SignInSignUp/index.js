import React, { Component } from 'react';
import '../../../content/styles/signinsignup.css';
export default class SignInSignUp extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      slidePannelActive: false
    }
  }
  switchSignUp = () => {
    this.setState({slidePannelActive: !this.state.slidePannelActive});
  }
  render() {
    return (
      <div className={this.state.slidePannelActive ? "signin-wrapper right-panel-active" : "signin-wrapper"}>
<div className="signin-container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Tạo Tài Khoản</h1>
            <input type="text" placeholder="Tên" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mật Khẩu" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Đăng Nhập</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mật Khẩu" />
            {/* <a href="#">Forgot your password?</a> */}
            <button>Đăng Nhập</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chào Mừng!</h1>
              <p>kết nối MoTi và cùng khám phá thế giới phim sống động</p>
              <button className="ghost" id="signIn" onClick={()=> this.switchSignUp()}>Đăng Nhập</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Bạn Chưa Có Tài Khoản!</h1>
              <p>Cùng đăng ký để nhận ưu đãi thành viên</p>
              <button className="ghost" id="signUp" 
                onClick={()=> this.switchSignUp()}
              >Đăng Ký</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    )
  }
}
