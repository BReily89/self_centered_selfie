import React, { Component } from 'react';
import TextField from "material-ui/TextField"

import axios from 'axios'

class PostUpdate extends Component {
    state = {
        post: {},
        redirectToPosts: false
    }

async componentWillMount() {
    const { journalId } = this.props.match.params
    const { postId } = this.props.match.params
    const res = await axios.get(`/api/journals`)
    console.log(res.date)
    this.setState({post :res.data})
}
handleChange = (event, postId) => {
    const attribute = event.target.name
    const clonedPost = { ...this.state.post }
    clonedPost[attribute] = event.target.value

    this.setState({ post: clonedPost })
    console.log(this.state.post)
}
updatePost = async (event) => {
    event.preventDefault()
    try {
        const { journalId } = this.props.match.params
        const { id } = this.props.match.params
        const clonedPost = { ...this.state.post }
        console.log('here')
        const res = await axios.patch(`/api/journals/${journalId}/posts/${id}`, {
            post: this.state.post
        })
        console.log(res.data)
        this.setState({ journal: res.data , redirectToPost: true })
    }catch (error) {
    }
}
    render() {
        const { journalId } = this.props.match.params
        const { postId } = this.props.match.params
        return (
           <div>
                 <h1>Edit Post</h1>
               <form onSubmit={this.updatePost}>
               <div>
                   <label htmlFor="title">Date</label>

                   <TextField onChange={this.handleChange} name="title"
                   type="text" value={this.state.post.title} />
               </div>
               <div> 
                   <label htmlFor="content">Moods</label>
                   <textarea 
                    onChange={this.handleChange} name="content"
                    type="text" value={this.state.post.content} />
                    <button>Edit</button>
               </div>
               <div>
                   <label htmlFor="photo_url">add a seflie</label>
                  <input onChange={this.handleChange} type='text'name='photo_url' value={this.state.photo_url}/>
               </div>
               </form>
           </div>
                
        );
    }
}

export default PostUpdate;