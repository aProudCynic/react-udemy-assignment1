import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div>
        <UserInput/>
        <UserOutput name="Joe"/>
        <UserOutput name="John"/>
    </div>
    )
  }
}

export default App;
