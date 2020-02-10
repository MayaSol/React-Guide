import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App!</h1>
        <Person name = "Max" age="28"/>
        <Person name = "Manu" age = "30">My Hobby: Racing</Person>
        <Person name = "Stephany" age="26"/>
      </div>
    );
  }
}

export default App;
