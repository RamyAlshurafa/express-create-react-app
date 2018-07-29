import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import logo from './logo.png';
import './App.css';
import { getNews } from './lib/api'

import Home from './pages/Home'
import NewsFeed from './pages/NewsFeed'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'Mavis',
      newsItems: []
    }
  }

  componentDidMount() {
    getNews().then(newsItems => {
      this.setState({
        newsItems
      })
    }).catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mavis' App</h1>
        </header>
        <Router>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} user={this.state.user} />} />
            <Route path="/news" render={props => <NewsFeed {...props} newsItems={this.state.newsItems} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
