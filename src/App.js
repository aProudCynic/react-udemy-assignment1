import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: 'Tommy'
  }

  userNameChanged = (event) => {
    this.setState({userName: event.target.value});
  }

  render() {
    return (
      <div>
        <UserInput changeHandler={this.userNameChanged} name={this.state.userName}/>
        <UserOutput name={this.state.userName}/>
        <UserOutput name="John"/>
    </div>
    )
  }
}

export default App;
