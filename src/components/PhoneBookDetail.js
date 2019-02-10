import React, { Component } from 'react'

export default class PhoneBookDetail extends Component {
  render() {
    if (!this.props.phoneBook) {
        return (
            <div></div>
        )
    }

    const { name,phonenumber,address } = this.props.phoneBook;
    
    return (
      <div className='card-body'>
        <div className='row'>
            <label htmlFor='detail_name'>
                <h6 className="card-subtitle mb-2 text-muted">이름</h6>
                <input type='text' className='form-control' id='detail_name' value={name} readOnly />
            </label>
        </div>
        <br/>
        <div className='row'>
            <label htmlFor='detail_phonenumber'>
                <h6 className="card-subtitle mb-2 text-muted">전화번호</h6>
                <input type='text' className='form-control' id='detail_phonenumber' value={phonenumber} readOnly />
            </label>
        </div>
        <br/>
        <div className='row'>
            <label htmlFor='detail_address'>
                <h6 className="card-subtitle mb-2 text-muted">주소</h6>
                <input type='text' className='form-control' id='detail_address' value={address} readOnly />
            </label>
        </div>
      </div>
    )
  }
}
