import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 30},
      {name: 'Stephany', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    console.log('Was Clicked');
    console.log(this);
    //DON'T DO THIS: this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 30},
        {name: 'Stephany', age: 27}
      ]
    });
  }

  switchNameHandler2 = function() {
    console.log('swithHandler2');
    console.log(this);
  }

  nameChangedHandler = (event) => {

    console.log('changed');
    console.log(event);

    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: 'Manu', age: 30},
        {name: event.target.value, age: 27}
      ]
    })
  }

  render() {
    const myStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am React App!</h1>
        <button
          style={myStyle}
          onClick={() => this.switchNameHandler('Maximillian!!')}
        >
          Switch Name
        </button>
        <button onClick={this.switchNameHandler2.bind(this)}>Switch Name 2</button>
        <Person
          name = {this.state.persons[0].name}
          age = {this.state.persons[0].age}/>
        <Person
          name = {this.state.persons[1].name}
          age = {this.state.persons[1].age}/>
        <Person
          name = {this.state.persons[2].name}
          age = {this.state.persons[2].age}
          myClick = {this.switchNameHandler.bind(this,'Max!!')}
          myChanged = {this.nameChangedHandler}
          >
          <li>My Hobby: Racing</li>
        </Person>
        <Person
          name = "Maya"
          age="38"/>
      </div>
    );
  }
}

export default App;
