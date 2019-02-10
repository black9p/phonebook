import React, { Component } from 'react'

export default class PhoneBook extends Component {
  render() {
    const {phonebook, onSelect, onRemove} = this.props;

    return (
      <div className='row'>
        <div className='col-sm-10' onClick={() => onSelect(phonebook)}>
          {phonebook.get('name')}
        </div>
        <div className='col-sm-2'>
          <button className='btn btn-sm btn-outline-danger' onClick={() => onRemove(phonebook.get('id'))}>x</button>
        </div>
      </div>
    )
  }
}
