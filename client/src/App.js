import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import logo from './logo.png';
import './App.css';

import Home from 'pages/Home'
import NewsFeed from 'pages/NewsFeed'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mavis' App</h1>
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={NewsFeed} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
