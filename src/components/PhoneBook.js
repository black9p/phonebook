import React, { Component } from 'react'

export default class PhoneBook extends Component {
  render() {
    const {name, id} = this.props.phonebook;

    return (
      <div className='row'>
        <div className='col-sm-10' onClick={() => this.props.handleSelectedPhoneBook(this.props.phonebook)}>
          {name}
        </div>
        <div className='col-sm-2'>
          <button className='btn btn-sm btn-outline-danger' onClick={() => this.props.removePhoneBook(id)}>x</button>
        </div>
      </div>
    )
  }
}
