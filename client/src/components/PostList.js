import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NewPostForm from './NewPostForm'
import axios from  'axios'
import FlatButton from 'material-ui/FlatButton'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import styled from 'styled-components'

const TextWrapper = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
padding-top: 5px;
padding-bottom: 30px;
align-content: center;
`


const PostListStyle = styled.div`
display: flex;
margin: 0.5rem;
padding: 1rem;
align-content: center;
`
class PostList extends Component {
    state = {
        posts: [],
        journalId: 0,
        emotion:[],
        showNewForm: false,
    }
    handleChange = (event, postId) => {
        const name = event.target.name
        const newState = {...this.state}
        newState[name] = event.target.value
        this.setState({posts:newState})
    
    }
    updatedPost = async (postId) => {
        const id = postId
        console.log(id)
        const updatedPost = {...this.state.post}
        const res = await axios.patch(`/api/posts/${id}`,{})
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            title: this.state.title,
            content: this.state.content,
            photo_url: this.state.photo_url
        }
    }
    componentWillMount() {
        console.log('mounting')
        console.log(this.props.posts)
        console.log(this.props.journalId)
    }
    toggleShowNewForm = () => {
        this.setState({showNewForm: !this.state.showNewForm})
    }
    deletePost = async (id) => {
            const journalId = this.props.journalId
            const res = await axios.delete(`/api/journals/${journalId}/posts/${id}`)
            console.log(res.data)
            this.props.getPosts()
    }
    render() {
        return (
            <div>
                {this.props.posts.map((post) => {
                    return (
                        <TextWrapper>
                            <h1>{post.title}</h1>
                            <p>{post.content}</p>
                            <img src={post.photo_url}/>
                            <p>{post.emotion}</p>
                            <div>
                            <FlatButton onClick={() => this.deletePost(post.id)} label="Delete this post" />

                            <FlatButton href={`/journals/${this.props.journalId}/posts/${post.id}`}label="Edit this post"/>

                            </div>
                        </TextWrapper>
                    )
                })}
                

            <FlatButton onClick={this.toggleShowNewForm}>New Post</FlatButton>
            {this.state.showNewForm ? <NewPostForm getPosts={this.props.getPosts} journalId={this.props.journalId}/> :null}
            </div>
        )
    }
}

export default PostList;
          