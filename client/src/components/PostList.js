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
        showNewForm: false
    }

    componentWillMount(){
        console.log('mounting')
        console.log(this.props.posts)
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
        // if(window.confirm(`are you sure?${this.state.post.title}?`)) {
            const journalId = this.props.journalId
            // const postId = this.props.match.params.postId
            const res = await axios.delete(`/api/journals/${journalId}/posts/${id}`)
            console.log(res.data)
            this.props.getPosts()
        // }
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
                            <FlatButton onClick={() => this.deletePost(post.id)} label="Delete this post" />
                        </div>
                    )
                })}
                
                   {/* {this.state.posts.map((post) => {
                        <div>
                <Link key={post.id} to={`/posts/${post.id}`}>
                <h3>title:{post.title}</h3>
                <p>content: {post.content}</p>
                <p>selfie: {post.selfie}</p>
                </Link>
                 <FlatButton onClick={() => {this.deletePost()}} label="Delete this post"> Delete Post </FlatButton>
                 </div>
                            
            })}  */}
            <FlatButton onClick={this.toggleShowNewForm}>New Post</FlatButton>
            {this.state.showNewForm ? <NewPostForm getPosts={this.props.getPosts} journalId={this.props.journalId}/> :null}
            </div>
        )
    }
}
export default PostList;
          