import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Tommy'
    }
  }

  render() {
    return (
      <div>
        <UserInput/>
        <UserOutput name={this.state.userName}/>
        <UserOutput name="John"/>
    </div>
    )
  }
}

export default App;
