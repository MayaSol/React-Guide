import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id: 'asdaf1', name: 'Max', age: 28},
      {id: 'asdad3', name: 'Manu', age: 30},
      {id: 'asdax4', name: 'Stephany', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
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

  nameChangedHandler = (event, id) => {
    //вместо id можно использовать index, в который передавать index массива

    // console.log('changed');
    // console.log(event);

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    //const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    // const doesShow = this.state.showPersons;
    // this.setState({showPersons: !doesShow});
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              myClick = {() => this.deletePersonHandler(index)}
              myChanged ={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id}/>
          })}
        </div>
      );

    }

    // let classes = ['red', 'bold'].join(' ');
    let classes = [];

    if (this.state.persons.length <= 2) {
        classes.push('red');
    }

    if (this.state.persons.length <= 1) {
        classes.push('bold');
    }

    console.log('classes');
    console.log(classes);


    return (
        <div className="App">
          <h1>Hi, I am React App!</h1>
          <p className = {classes.join(' ')}>This is really working!</p>
          <button
            onClick={() => this.switchNameHandler('Maximillian!!')}
          >
            Switch Name
          </button>
          <button onClick={this.switchNameHandler2.bind(this)}>Switch Name 2</button>
          <div>
            <button alt = {this.state.showPersons} onClick={this.togglePersonsHandler}>
                Toggle Persons
            </button>
          </div>
          {persons}
        </div>
    );
  }
}

export default App;
