import React, { Component } from 'react';
import axios from 'axios'
import PostList from './PostList'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'


class Journal extends Component {
    state = {
        journal: {},
        posts: []
    }
    async componentWillMount() {
        this.getPosts()
        this.getJournal()
    }   
    getPosts = async () => {
        try {
            const journalId = this.props.match.params.journalId
            const response = await axios.get(`/api/journals/${journalId}/posts`)
  
            this.setState({posts: response.data})
        }catch (error) {
            console.log(error)
        }
    }
    getJournal = async () => {
        try {
            const journalId = this.props.match.params.journalId
            const response = await axios.get(`/api/journals/${journalId}/`)

            this.setState({journal: response.data})
        }catch (error) {
            console.log(error)
        } 
    }

    render() {
        console.log(this.state.posts)
        return (
            <div>
               <div>{this.state.journal.name}</div> 
               <div>{this.state.journal.description}</div>
               <PostList getPosts={this.getPosts} journalId={this.props.match.params.journalId}
               posts={this.state.posts}
               journalId={this.state.journal.id} />
              

            </div>
        );
    }
}

export default Journal;