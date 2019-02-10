import React, { Component } from 'react'
import PhoneBookList from '../components/PhoneBookList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from '../modules/input';
import * as phonebookActions from '../modules/phonebook';

class PhoneBookListContainer extends Component {
  handleSelect = (id) => {
      const { PhonebookActions } = this.props;
      PhonebookActions.select(id);
  }

  handleRemove = (id) => {
    const { InputActions, PhonebookActions } = this.props;
    PhonebookActions.remove(id);
    InputActions.setInput('');
    PhonebookActions.search('');
  }

  render() {
    const { phonebook } = this.props;
    const { handleSelect, handleRemove } = this;
    
    return (
      <PhoneBookList 
        phonebook={phonebook}
        onSelect={handleSelect}
        onRemove={handleRemove}
      />
    )
  }
}

export default connect(
    (state) => ({
        phonebook: state.phonebook.get('filteredList')
    }),
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions, dispatch),
        PhonebookActions: bindActionCreators(phonebookActions, dispatch)
    })
)(PhoneBookListContainer);
