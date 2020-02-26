import React from 'react';
import Person from './Person/Person';

const persons = (props) => {

  console.log('[Persons.js rendering ...');

  return props.persons.map((person,index) => {
      return <Person
        myClick = {() => props.clicked(index)}
        myChanged ={(event) => props.changed(event, person.id)}
        name={person.name}
        age={person.age}
        key={person.id}
      />
  });

}

export default persons;
