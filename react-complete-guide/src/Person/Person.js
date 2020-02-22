import React from 'react';
import Person from './Person.css';

const person = (props) => {
  // console.log(props);
	return (
		<div className="Person">
			<p onClick={props.myClick}>I'm a {props.name} and I'm {props.age} years old</p>
			<div>{props.children}</div>
      <input type="text" onChange={props.myChanged} value={props.name}/>
		</div>
	)
}

export default person;
