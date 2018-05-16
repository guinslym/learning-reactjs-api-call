import React, { Component } from 'react';
import './App.css';
import News from './News'
import Menu from './Menu'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Menu />
        <News />
      </div>
    );
  }
}

export default App;
