import React, { Component } from 'react';
import './App.css';
import News from './news/News'
import Menu from './menu/Menu'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my news feed API </h1>
        </header>
        <News />
      </div>
    );
  }
}

export default App;
