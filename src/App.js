import React, { Component } from 'react';
import './App.css';
import Dog from './Dog/Dog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Dog name='Rumba' age='4'>She likes to walk three times a day</Dog>
        <Dog name='Mishka' age='1' />
        <Dog name='Niusha' age='1' />
      </div>
    );
    // return React.createElement('section', {className: 'App rumba'}, React.createElement('h1', null, 'The dog'))
  }
}

export default App;
