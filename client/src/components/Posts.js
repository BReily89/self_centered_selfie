import React, { Component } from 'react';
import axios from 'axios'
import FlatButton from 'material-ui/FlatButton';
import NewPostForm from './NewPostForm'
import {Redirect} from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import timeago from 'timeago.js'





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
    console.log(this.props)
    console.log(this.state)
    }
    deletePost = async () => {
        if(window.confirm(`are you sure?${this.state.post.title}?`)) {
            const journalId = this.props.match.params.journalId
            const postId = this.props.match.params.postId
            const res = await axios.delete(`/api/journals/${journalId}/posts/${postId}`)
            this.setState({post: res.data, redirectToJournal: true})
        }
    }
    render() {
        const journalId = this.props.match.params.journalId
        const postId = this.props.match.params.postId

        if (this.state.redirectToJournals){
            return (
            
            <Card>
                <CardHeader
                title={this.state.posp.title}
                subtitle={timeago}
                 />
                 <CardText expandable={false}>
                 {this.state.posts.content}
                 </CardText>
            <CardActions>
            <NewPostForm posts={this.state.posts} />
            return <Redirect to={`/journals/${journalId}`} />
            <FlatButton
            onClick={() => {this.deletePost()}}label="Delete this post" />
            <FlatButton href={`{journals/${journalId}/posts/${postId}/edit`}label="Edit Post" />
            <FlatButton href={`/journals/${journalId}`}label="Go back to Journal entries" />
            </CardActions>
            </Card>
            //  {/* <Redirect to={`/journals/${journalId}`} /> */}
            )
        }
    }
}
export default Posts;