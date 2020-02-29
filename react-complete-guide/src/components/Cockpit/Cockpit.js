import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext);

  useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      toggleBtnRef.current.click();

      // Http reauest ...
      // setTimeout(() => {
      //   alert('Send data to cloud');
      // },1000);
      return () => {
        console.log('[Cockpit.js] Clean up work in UseEffect()');
      };
    }, []
  );

  useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return ()=>{
        console.log('[Cockpit.js] Clean up work in 2nd UseEffect');
      };
    }
  );

  let assignedClasses = [];
  let btnClass = [classes.Button];

  if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
  }

  if (props.showPersons) {
    btnClass.push(classes.Red);
  }


  return (
    <div>
      <h1>{props.title}</h1>
      <p className = {assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref = {toggleBtnRef}
        className = {btnClass.join(' ')}
        onClick={props.clicked}>
          Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
      {/*<AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>*/}
    </div>
  );
}

export default React.memo(cockpit);
