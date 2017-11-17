import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./App.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Journals from './components/Journals'
import NewJournalform from './components/NewJournalForm'
import NewPostForm from './components/NewPostForm'
import Posts from './components/Posts'
import Journal from './components/Journal'
import PostUpdate from './components/PostUpdate'


class App extends Component {
  render() {
    return ( <MuiThemeProvider>
      <Router>
        <div classname ="App">
        <div>
          <Switch>
            <Route exact path="/" component={Journals}/>
            <Route exact path="/journals/:journalId/" component={Journal}/>
            <Route exact path="/journals/:journalId/posts/" component={Posts}/>
            <Route exact path="/journals/:journalId/posts/:id" component={PostUpdate} />

            
          </Switch>
          </div>
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
