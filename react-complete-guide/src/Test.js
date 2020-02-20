import React, { Component } from 'react';
import './Test.css';

class Test extends Component {
  state = {
    text: 'Old Text'
  };

  onClickTest = (num) => {
      // this.setState({
      //   text: newText
      // });

      let res = num*2;

      console.log(res);
  }


  render() {
    return (
      <div className="Test">
        <h1>Test</h1>
        <button onClick={() => this.onClickTest(5)}>Switch Name</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Test;
