import React, { Component } from 'react';
import axios from 'axios'
import FlatButton from 'material-ui/FlatButton';
import NewPostForm from './NewPostForm'
import {Redirect} from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import timeago from 'timeago.js'

class Posts extends Component {
    state = {
        posts: {},
        redirectToJournals: false
    }
    handleChange = (event) => {
        const name =event.target.name
        const newState = {...this.state}
        newState[name] = event.target.value
        this.setState(newState)
    }
    async componentWillMount() {
        try{
            const journalId = this.props.match.params.journalId
            const postsId = this.props.match.params.postsId
            const emotionId = this.props.match.params.emotionId

            const response = await axios.get(`/api/journals${journalId}/posts/${postsId}`)
            console.table(response.data)
            this.setState({post: response.data})
        }catch (error){
            console.log(error)
        }
    console.log(this.props)
    console.log(this.state)
    }
    deletePost = async () => {
        if(window.confirm(`are you sure?${this.state.post.title}?`)) {
            const journalId = this.props.match.params.journalId
            const postId = this.props.match.params.postId
            const res = await axios.delete(`/api/journals/${journalId}/posts/${postId}`)
            this.setState({post: res.data, redirectToJournals: true})
        }
    }
    render() {
        const journalId = this.props.match.params.journalId
        const postId = this.props.match.params.postId

        if (this.state.redirectToJournals){
            return (
            
            <Card>
                <CardHeader
                title={this.state.post.title}
                subtitle={timeago}
                 />
                 <CardText expandable={false}>
                 {this.state.posts.content}
                 {this.state.emotions}
                 </CardText>
            <CardActions>
            <NewPostForm posts={this.state.posts} />
            return <Redirect to={`/journals/${journalId}`} />
            <FlatButton onClick={() => {this.deletePost()}}label="Delete this post" />
            <FlatButton href={`{journals/${journalId}/posts/${postId}/edit`}label="Edit Post" />
            <FlatButton href={`/journals/${journalId}`}label="Go back to Journal entries" />
            </CardActions>
            </Card>
            )
        }
    }
}
export default Posts;