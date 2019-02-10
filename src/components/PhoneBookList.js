import React, { Component } from 'react'
import PhoneBook from './PhoneBook';

export default class PhoneBookList extends Component {
  render() {
    const {phonebook, onSelect, onRemove} = this.props;
    const phoneBookList = phonebook.map(
      phonebook => (
        <li key={phonebook.get('id')} className="list-group-item">
          <PhoneBook phonebook={phonebook} onSelect={onSelect} onRemove={onRemove} />
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
