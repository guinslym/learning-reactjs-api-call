import React, { Component } from 'react';
import './App.css';
import News from './news/News'
import Menu from './menu/Menu'

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
