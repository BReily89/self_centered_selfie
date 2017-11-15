import React, { Component } from 'react';
import timeage from 'timeago'

class Posts extends Component {

    render() {
        const {posts} = this.props
        return (
            <div>
                {
                    posts.map((post) => {
                        const content = post.content.splice(" ")(.0, 50).join(" ")
                        const timeAgo = timeAgo().format(post.created_at)

                    })

                }
                
            </div>
        );
    }
}

export default Posts;