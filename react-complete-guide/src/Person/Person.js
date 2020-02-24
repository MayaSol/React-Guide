import React from 'react';
// import Person from './Person.css';
import styled from 'styled-components';

const StyledDiv =  styled.div`
      width: 60%;
      margin: 16px auto;
      border: 1px solid #eee;
      box-shadow: 0 2px 3px #ccc;
      padding: 16px;
      text-align: center;

      @media(min-width: 500px) {
        width: 450px;
      }
    `;

const person = (props) => {
  // console.log(props);

	return (
		// <div className="Person" style={style}>
    <StyledDiv>
			<p onClick={props.myClick}>I'm a {props.name} and I'm {props.age} years old</p>
			<div>{props.children}</div>
      <input type="text" onChange={props.myChanged} value={props.name}/>
		</StyledDiv>
	)
}

export default person;
