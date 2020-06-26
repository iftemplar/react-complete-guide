import React, { Component } from 'react';
import './App.css';
import Dog from './Dog/Dog';

class App extends Component {
    // state  is a property of the component class
    // if state changes it leads react to re-render the changed part
    state = {
        doggos: [
            {name: 'Rumba', age: 4},
            {name: 'Mishka', age: 2},
            {name: 'Niusha', age: 1}
            ]
    }

      render() {
        return (
          <div className="App">
            <h1>Hello</h1>
            <Dog name={this.state.doggos[0].name} age={this.state.doggos[0].age}>She likes to walk three times a day</Dog>
            <Dog name={this.state.doggos[1].name} age={this.state.doggos[1].age} />
            <Dog name={this.state.doggos[2].name} age={this.state.doggos[2].age} />
          </div>
        );
    // return React.createElement('section', {className: 'App rumba'}, React.createElement('h1', null, 'The dog'))
  }
}

export default App;
