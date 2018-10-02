import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Cover from './Cover'
import Website from './Website'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Cover />
      </div>
    );
  }
}

export default App;
