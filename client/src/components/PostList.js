import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NewPostForm from './NewPostForm'
import axios from  'axios'
import FlatButton from 'material-ui/FlatButton'


// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
// import FlatButton from 'material-ui/FlatButton';
// import timeago from 'timeago.js'

class PostList extends Component {
    state = {
        posts: [],
        journalId: 0,
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
        const res = await axios.patch(`/api/posts/${postId}`,{
        })
        this.setState({
            post: res.data
        })
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

    // getAllPosts = async () => {
    //     const res = await axios.get(`/api/posts`)
    //     console.log(res)
    //         this.setState({posts: res.data})
    // }
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
                        <div>
                            <h1>{post.title}</h1>
                            <p>{post.content}</p>
                            <img src={post.photo_url}/>
                            <div>
                            <FlatButton onClick={() => this.deletePost(post.id)} label="Delete this post" />
                            {/* <FlatButton onClick={() => this.PostUpdate(post.id)} label="Edit this post" /> */}
                            <button><Link to={`/journals/${this.state.journalId}/posts/${post.id}`}>Edit this shit yo</Link></button>

                            </div>
                        </div>
                    )
                })}
                

            <FlatButton onClick={this.toggleShowNewForm}>New Post</FlatButton>
            {this.state.showNewForm ? <NewPostForm getPosts={this.props.getPosts} journalId={this.props.journalId}/> :null}
            </div>
        )
    }
}
export default PostList;
          