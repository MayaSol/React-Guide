import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    chars: ['a','b','c']
  }

  inputChangeHandler = (event) => {
    console.log('inputChangeHandler');
    console.log(event.target.value);

    let chars = event.target.value.split('');

    this.setState({
      chars: chars
    });
  }

  deleteChar = (charIndex) => {
    console.log('deleteChar');
    console.log(charIndex);

    let chars = [...this.state.chars];

    chars.splice(charIndex,1);

    this.setState({
      chars: chars
    })
  }

  render() {
    let length = this.state.chars.length;
    let chars = this.state.chars.map((char,index) => {
      return (
        <CharComponent char={char} click={() => this.deleteChar(index)}/>
      );
    });
    let value = this.state.chars.join('');
    return (
      <div className="App">
        <div className="App__inner">
          <h1>Lists and Conditions</h1>
          <section className="App__content">
            <input type="text" onChange={this.inputChangeHandler} value = {value}/>
            <p>{length}</p>
            <ValidationComponent length={length}/>
            <div>
              {chars}
            </div>
          </section>
        </div>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
