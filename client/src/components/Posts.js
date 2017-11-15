import React, { Component } from 'react';
import axios from 'axios'

class Posts extends Component {
    state ={
        posts: {},
        redirectToJournals: false
    }
    async componentWillMount() {
        try{
            const journalId = this.props.match.params.journalId
            const postsId = this.props.match.params.postsId

            const response = await axios.get(`/api/journals${journalId}/posts/${postsId}`)
            console.table(response.data)
            this.setState({post: response.data})
        }catch (error){
            console.log(error)
        }
    console.log(this.prope)
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Posts;