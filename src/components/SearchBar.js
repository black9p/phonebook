import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" onChange={this.props.handleSelectedList} value={this.props.inputPhoneBook} placeholder="Search.." aria-describedby="button-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => this.props.addPhoneBook()}>추가</button>
        </div>
      </div>
    )
  }
}
