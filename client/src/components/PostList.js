import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NewPostForm from './NewPostForm'
import axios from  'axios'

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
    getAllPosts = async () => {
        const res = await axios.get(`/api/posts`)
        console.log(res)
            this.setState({posts: res.data})
    }
    toggleShowNewForm = () => {
        this.setState({showNewForm: !this.state.showNewForm})
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
                        </div>
                    )
                })}
                    {/* {this.state.posts.map((post) => {
                <Link key={post.id} to={`/posts/${post.id}`}>
                <h3>title:{post.title}</h3>
                <p>content: {post.content}</p>
                <p>selfie: {post.selfie}</p>
                </Link>
            })} */}
            <button onClick={this.toggleShowNewForm}>New Post</button>
            {this.state.showNewForm ? <NewPostForm getAllPosts={this.getAllPosts}/> :null}
            </div>
        )
    }
}


export default PostList;
          