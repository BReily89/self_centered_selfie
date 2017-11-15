import React, { Component } from 'react';
import axios from 'axios'
import PostList from './PostList'
import Posts from './Posts'

class Journal extends Component {
    state = {
        journal: {},
        posts: []
    }
    async componentWillMount() {
        try {
            const journalId = this.props.match.params.JournalId
            const response = await axios.get(`/api/journals/${journalId}`)
            this.setState({city: response.data})
        }catch (error) {
            console.log(error)
        }
        try {
            const journalId = this.props.match.params.journalId
            const response = await axios.get(`api/journals/:id${journalId}/posts`)
            this.setState({posts: response.data})
        }catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
               <div>{this.state.journal.name}</div> 
               <div>{this.state.journal.description}</div>
               <div>{this.state.journal}</div>
               <div>{this.state.posts}</div>
               <div>{this.state.city}</div>

            </div>
        );
    }
}

export default Journal;