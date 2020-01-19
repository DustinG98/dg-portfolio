import React from 'react';

import Home from './components/Home/Home/Home'
import Blog from './components/Blog/Blog'
import NavBar from './components/NavBar'
import Dashboard from './components/Blog/BlogDashboard/Dashboard'
import {Route} from 'react-router-dom'
import './App.css';
import Login from './components/Blog/BlogDashboard/Login';

import PrivateRoute from './auth/PrivateRoute'

function App() {
  return (
    <div className="App">
      <div className="appWrapper">
        <NavBar/>
      </div>
    {/* ROUTING */}
    <Route exact path="/" render={props => <Home {...props}/>} />
    <Route exact path="/blog" render={props => <Blog {...props}/>} />
    <PrivateRoute exact path="/blog/dashboard"><Dashboard/></PrivateRoute>
    <Route exact path="/blog/dashboard/login" render={props => <Login/>} />
    <Route exact path="/contact" render={props => <Home {...props}/>} />
    </div>
  );
}

export default App;
