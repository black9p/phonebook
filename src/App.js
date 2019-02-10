import React, { Component } from 'react';
import SearchBarContainer from './containers/SearchBarContainer';
import PhoneBookListContainer from './containers/PhoneBookListContainer';
import PhoneBookDetailContainer from './containers/PhoneBookDetailContainer';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <h2>브롤 주소록</h2>
        </div>
        <div className='row col-sm-6'>
          <SearchBarContainer />
        </div>
        <div className='row'>
          <div className='col-sm-3'>   
            <PhoneBookListContainer />
          </div>
          <div className='col-sm-3 card'>
            <PhoneBookDetailContainer /> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
