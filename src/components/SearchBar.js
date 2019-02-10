import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    const {onChange, onInsert, value} = this.props;

    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" value={value} onChange={onChange} placeholder="Search.." aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" onClick={onInsert} type="button" id="button-addon2">추가</button>
        </div>
      </div>
    )
  }
}
