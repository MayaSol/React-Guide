import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/aux';
import AuthContext from '../context/auth-context.js';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 'asdaf1', name: 'Max', age: 28},
      {id: 'asdad3', name: 'Manu', age: 30},
      {id: 'asdax4', name: 'Stephany', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  };

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

    this.setState(
      (prevState, props) => {
      return { persons: persons,
          changeCounter: prevState.changeCounter + 1
        }
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    // const doesShow = this.state.showPersons;
    // this.setState({showPersons: !doesShow});
    this.setState({showPersons: !this.state.showPersons});
  }

  removeCockpit = () => {
    this.setState({showCockpit: false});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          // isAuthenticated = {this.state.authenticated}
        />
      );
    }

    let cockpit = null;
    if (this.state.showCockpit) {
      cockpit = (
          <Cockpit
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            personsLength = {this.state.persons.length}
            clicked = {this.togglePersonsHandler}
          />
      );
    }


    return (
        <Aux>
        <button onClick = {this.removeCockpit}>Remove Cockpit</button>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
            }}>
            {cockpit}
            {persons}
          </AuthContext.Provider>
        </Aux>
    );
  }
}

export default withClass(App,classes.App);
