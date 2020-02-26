import React from 'react';
import classes from './Person.css';

const person = (props) => {
  // console.log(props);

  // const rnd = Math.random();

  // if (rnd > 0.7) {
  //   throw new Error('Something went wrong');
  // }

  console.log('[Person.js] rendering ...')

	return (
		// <div className="Person" style={style}>
    <div className={classes.Person}>
			<p onClick={props.myClick}>I'm a {props.name} and I'm {props.age} years old</p>
			<div>{props.children}</div>
      <input type="text" onChange={props.myChanged} value={props.name}/>
		</div>
	)
}

export default person;
