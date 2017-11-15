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
            const journalId = this.props.match.params.journalId
            const response = await axios.get(`/api/journals/${journalId}/posts`)
  
            this.setState({posts: response.data})
        }catch (error) {
            console.log(error)
        }
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
               <PostList posts={this.state.posts}
               journalId={this.state.journal.id} />
              

            </div>
        );
    }
}

export default Journal;