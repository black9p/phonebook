import React, { Component } from 'react';
import { Map } from 'immutable';
import SearchBar from '../components/SearchBar';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from '../modules/input';
import * as phonebookActions from '../modules/phonebook';

import { dummyList } from '../static/DummyList';

class SearchBarContainer extends Component {
  id = dummyList.size;
  getId = () => {
      return ++this.id;
  }

  handleChange = (e) => {
      const value = e.target.value;
      const { PhonebookActions, InputActions } = this.props;
      PhonebookActions.search(value);
      InputActions.setInput(value);
  }

  handleInsert = () => {
      const { InputActions, PhonebookActions, value } = this.props;
      const newPhonebook = Map({
          id: this.getId(),
          name: value,
          phonenumber: '',
          address: ''
      });
      PhonebookActions.insert(newPhonebook);
      InputActions.setInput('');
      PhonebookActions.search('');
  }

  render() {
    const { value } = this.props;
    const { handleChange, handleInsert } = this;

    return (
        <SearchBar 
            onChange={handleChange}
            onInsert={handleInsert}
            value={value}
        />
    )
  }
}

export default connect(
    (state) => ({
        value: state.input.get('value')
    }),
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions, dispatch),
        PhonebookActions: bindActionCreators(phonebookActions, dispatch)
    })
)(SearchBarContainer);
