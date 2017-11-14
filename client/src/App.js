import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Journals from './components/Journals'
import NewJournalform from './components/NewJournalForm'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Hello</h1>
          <Switch>
            <Route exact path="/" component={Journals}/>
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
