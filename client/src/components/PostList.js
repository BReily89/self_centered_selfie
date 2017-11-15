import React, {Component} from 'react';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
// import FlatButton from 'material-ui/FlatButton';
// import timeago from 'timeago.js'

class PostList extends Component {

    componentWillMount(){
        console.log('mounting')
        console.log(this.props.posts)
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
            </div>
        )
    }
}


export default PostList;
            // <div>
            //     {
            //         posts.map((post) => {
            //         //    const content = post.content.split(" ").splice(0, 50).join(" ")
            //         //    const timeAgo = timeago().format(post.created_at)
            //             return (
                            
            //                 <Card key={post.id} style={{
            //                     margin: "10px",
            //                     color: "rgba(32.86. 33.14. 33.99, 0.4)"
            //                 }}>
            //                     <CardHeader
            //                     title={post.title}
            //                     style={{
            //                         fontWeight: "bold",
            //                         fontSize: "20px"
            //                     }}
            //                     />
            //                     <CardText>
            //                         <p>{content}... </p>
            //                     </CardText>
            //                     <CardActions>
            //                         <FlatButton href={`/journals/${this.props.city.id}/posts/${post.id}`}
            //                             label="View Post" 
            //                             style={{
            //                             backgroundColor: "#72E0FF"
            //                         }}/>
            //                     </CardActions>
            //                     <h1>sup</h1>
            //                 </Card>
            //             )
            //         })
            //     }
            // </div>
