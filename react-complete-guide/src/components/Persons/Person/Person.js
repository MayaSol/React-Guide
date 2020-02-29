import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/aux';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  // console.log(props);

  // const rnd = Math.random();

  // if (rnd > 0.7) {
  //   throw new Error('Something went wrong');
  // }

  static contextType = AuthContext;

  componentDidMount() {
    //this.inputELement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context);
  }


  render() {
    console.log('[Person.js] rendering ...')

    return (
      // <div className={classes.Person}>
      <Aux>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
        {/* <AuthContext.Consumer>
           {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
         </AuthContext.Consumer> */}
        <p onClick={this.props.myClick}>I'm a {this.props.name} and I'm {this.props.age} years old</p>
        <div >{this.props.children}</div>
        <input
          type="text"
          //ref = {(inputEl) => {this.inputELement = inputEl}}
          ref = {this.inputElementRef}
          onChange={this.props.myChanged}
          value={this.props.name}/>
      </Aux>
      // </div>
    )
  }
}

Person.propTypes = {
  myClick: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  myChanged: PropTypes.func
};

export default withClass(Person, classes.Person);
