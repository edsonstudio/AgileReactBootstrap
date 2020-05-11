import React from 'react';
import './App.css';
import NavBar from './ui/NavBar';

function App() {
  const logo = 'DevDeck101'
  return (
    <div className="container">
        <NavBar logo={logo}/>
    </div>
  );
}

export default App;
