import React, { Component } from 'react';
import EntryForm from './components/EntryForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Tournament Registration</h2>
          <p>Powered by React</p>
        </div>

        <EntryForm />
      </div>
    );
  }
}

export default App;
