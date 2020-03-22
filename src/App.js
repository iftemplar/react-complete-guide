import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hello</h1>
    //   </div>
    // );
    return React.createElement('section', {className: 'App rumba'}, React.createElement('h1', null, 'The dog'))
  }
}

export default App;
