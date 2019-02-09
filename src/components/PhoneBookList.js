import React, { Component } from 'react'
import PhoneBook from './PhoneBook';

export default class PhoneBookList extends Component {
  render() {
    const phoneBookList = this.props.phoneBookList.map(
      phonebook => (
        <li key={phonebook.id} className="list-group-item">
          <PhoneBook phonebook={phonebook} handleSelectedPhoneBook={this.props.handleSelectedPhoneBook} removePhoneBook={this.props.removePhoneBook} />
        </li>
      )
    )

    return (
      <div>
        <ul className="list-group">
          {phoneBookList}
        </ul>
      </div>
    )
  }
}
