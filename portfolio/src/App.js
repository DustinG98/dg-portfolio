import React from 'react';

import Home from './components/Home/Home/Home'
import NavBar from './components/NavBar'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="appWrapper">
        <NavBar/>
      </div>
    {/* ROUTING */}
    <Route exact path="/" render={props => <Home {...props}/>} />
    <Route exact path="/blog" render={props => <Home {...props}/>} />
    <Route exact path="/contact" render={props => <Home {...props}/>} />
    </div>
  );
}

export default App;
