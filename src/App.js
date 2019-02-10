import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import PhoneBookList from './components/PhoneBookList';
import PhoneBookDetail from './components/PhoneBookDetail';
import { phoneList } from './static/DummyList';

class App extends Component {
  id = phoneList.length + 1;
  
  state = {
    allList: phoneList,
    selectedList: phoneList,
    selectedPhoneBook: '',
    inputPhoneBook: ''
  }

  handleSelectedList = (e) => {
    this.setState({
      selectedList: this.state.allList.filter(phonebook => phonebook.name.search(e.target.value) !== -1),
      inputPhoneBook: e.target.value
    });
  }

  handleSelectedPhoneBook = (phonebook) => {
    this.setState({
      selectedPhoneBook: phonebook
    });
  }

  addPhoneBook = () => {
    const { allList, inputPhoneBook } = this.state;
    const newPhoneBook =  {
      id: this.id++,
      name: inputPhoneBook,
      phonenumber: '',
      address: ''
    }

    this.setState( {
      allList: [...allList, newPhoneBook],
      selectedPhoneBook: newPhoneBook,
      selectedList: [newPhoneBook]
    })
  }

  removePhoneBook = (id) => {
    const { allList } = this.state;
    const index = allList.findIndex(phonebook => phonebook.id === id);

    this.setState({
      allList: [
        ...allList.slice(0, index),
        ...allList.slice(index + 1, allList.length)
      ],
      inputPhoneBook: '',
      selectedPhoneBook: '',
      selectedList: [
        ...allList.slice(0, index),
        ...allList.slice(index + 1, allList.length)
      ]
    });
  }

  render() {
    const {inputPhoneBook, selectedList, selectedPhoneBook} = this.state;
    const {handleSelectedList, addPhoneBook, handleSelectedPhoneBook, removePhoneBook} = this;

    return (
      <div className='container'>
        <div className='row'>
          <h2>브롤 주소록</h2>
        </div>
        <div className='row col-sm-6'>
          <SearchBar handleSelectedList = {handleSelectedList} addPhoneBook = {addPhoneBook} inputPhoneBook = {inputPhoneBook} />
        </div>
        <div className='row'>
          <div className='col-sm-3'>   
            <PhoneBookList handleSelectedPhoneBook = {handleSelectedPhoneBook} phoneBookList={selectedList} removePhoneBook = {removePhoneBook} />
          </div>
          <div className='col-sm-3 card'>
            <PhoneBookDetail phoneBook = {selectedPhoneBook}/> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
