import React, { Component } from 'react'

export default class MovieSearchForm extends Component {
  render() {
    return (
      <form>
        <div className="form-row">
          <div className="form-group col-6">
            <select id="inputState" className="form-control">
              <option selected>Phim</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-6">
            <select id="inputState" className="form-control">
              <option selected>Ngày Xem</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-6">
            <select id="inputState" className="form-control">
              <option selected>Phim</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-6">
            <select id="inputState" className="form-control">
              <option selected>Ngày Xem</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12">
            <button className="btn btn-primary">đặt vé</button>
          </div>
        </div>
      </form>
    )
  }
}
