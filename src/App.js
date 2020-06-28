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
    };

    // method
    btnClickHandler  = (newName) => {
        // this.state.doggos[0].name = 'Rumbiton';
        console.log('Btn clicked');
        this.setState({
            doggos: [
                {name: newName, age: 4},
                {name: 'Mishka', age: 3},
                {name: 'Niusha', age: 2}
            ]
        })
    };

    // reacts on input type
    nameChangedHandler = (event) => {
        console.log(event);
        console.log(event.target);
        this.setState({
            doggos: [
                {name: 'Rumba', age: 4},
                {name:  event.target.value, age: 3},
                {name: 'Niusha', age: 1}
            ]
        })
    };

    copiedHandler = () => {
        console.log('Copy!');
    };

    linkClickHandler = (e) => {
        e.preventDefault();
        console.log('linkClickHandler');
    };

    contextMenuHandler = () => {
        console.log('contextMenuHandler')
    };

      render() {
        return (
          <div className="App" onCopy={this.copiedHandler} onContextMenu={this.contextMenuHandler}>
            <h1 >Hello</h1>
              <button onClick={()=> this.btnClickHandler('Rumbiyovych')}>Click me</button>
              <a href="https://iftemplar.com" onClick={this.linkClickHandler}>Link</a>

            <Dog
                name={this.state.doggos[0].name}
                age={this.state.doggos[0].age}
                click={this.btnClickHandler.bind(this, 'Rumbiterto')}>  {/* this binds this to current JS class */}
                She likes to walk three times a day
            </Dog>

            <Dog
                name={this.state.doggos[1].name}
                age={this.state.doggos[1].age}
                changed={this.nameChangedHandler}/>

            <Dog name={this.state.doggos[2].name} age={this.state.doggos[2].age} />
          </div>
        );
    // return React.createElement('section', {className: 'App rumba'}, React.createElement('h1', null, 'The dog'))
  }
}

export default App;
