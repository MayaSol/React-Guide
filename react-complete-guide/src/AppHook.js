import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState(
    [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 30},
      {name: 'Stephany', age: 26}
    ]
  );

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState);
  console.log(otherState);

  const switchNameHandler = () => {
    console.log('Was Clicked');
    setPersonsState(
      [
        {name: 'Maximillian', age: 28},
        {name: 'Manu', age: 30},
        {name: 'Stephany', age: 27}
      ]
    );
  }

  return (
    <div className="App">
      <h1>Hi, I am React App!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name = {personsState[0].name} age = {personsState[0].age}/>
      <Person name = {personsState[1].name} age = {personsState[1].age}/>
      <Person name = {personsState[2].name} age = {personsState[2].age}>
        <li>My Hobby: Racing</li>
      </Person>
      <Person name = "Stephany" age="26"/>
    </div>
  );
}

export default app;
