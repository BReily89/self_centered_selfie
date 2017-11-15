import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Journals from './components/Journals'
import NewJournalform from './components/NewJournalForm'
import NewPostForm from './components/NewPostForm'
import Posts from './components/Posts'
import Journal from './components/Journal'
import PostUpdate from './components/PostUpdate'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Journals}/>
            <Route exact path="/journals/:journalId/" component={Journal}/>
            <Route exact path="/journals/:id/posts/" component={Posts}/>
            <Route exact path="/journals/:id/posts/postUpdate" component={PostUpdate} />

            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
