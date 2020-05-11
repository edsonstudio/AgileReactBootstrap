import React from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import Home from './container/Home';

function App() {
  const logo = 'DevDeck101'
  return (
    <div className="container">
        <NavBar logo={logo}/>
        <Home />
    </div>
  );
}

export default App;
