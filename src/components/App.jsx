import React, { Component } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Main />
      <footer className="app__footer">
        <p>This page is powered by GCP Firebase hosting. The entirety of this site has been created by Erika Miguel. <a href='https://github.com/evmiguel/personal_site' target='_blank' rel="noopener noreferrer">Source code</a></p>
      </footer>
      </div>
    );
  }
}

export default App;
