import React from 'react';

import Home from './components/Home/Home/Home'
import NavBar from './components/NavBar'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="appWrapper">
        <NavBar/>
        <Home/>
      </div>

    </div>
  );
}

export default App;
