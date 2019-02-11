import React, { Component } from 'react'
import PhoneBookDetail from '../components/PhoneBookDetail';

import { connect } from 'react-redux';

class PhoneBookDetailContainer extends Component {
  render() {
    const { selected } = this.props;

    return (
      <PhoneBookDetail selected={selected}/>
    )
  }
}

export default connect(
    (state) => ({
        selected: state.phonebook.get('selected')
    }),
    null
)(PhoneBookDetailContainer);
