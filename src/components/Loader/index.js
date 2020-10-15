import React, { Component } from 'react'
import 'content/styles/user/components/_ScreenLoader.scss';
export default class ScreenLoader extends Component {
  render() {
    return (
      <div class="screenloader">
        <div class="loader"></div>
      </div>
    )
  }
}
