import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import { render } from 'react-dom';

class App extends Component {
  render() {
    const logo = 'DevDeck101'
    return (
      <div className="container">
          <NavBar logo={logo} />
          {this.props.children}
      </div>
    );
  }
}

export default App;
