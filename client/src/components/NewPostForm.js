import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const NewPostForms = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
padding-top: 5px;
padding-bottom: 10px;
background-color: white;`

class NewPostForm extends Component {
    state = {
        title:'',
        content:'',
        photo_url:''
    }
    handleChange = (event) => {
        const name = event.target.name
        const newState = {...this.state}
        newState[name] = event.target.value
        this.setState(newState)
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            title: this.state.title,
            content: this.state.content,
            photo_url: this.state.photo_url

        }
        const journalId = this.props.journalId
        await axios.post(`/api/journals/${journalId}/posts`, payload)
        await this.props.getPosts()
    }
    render() {
        return (
            <NewPostForms>
            <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor='title'>Title: </label>
                <input onChange={this.handleChange} type='text' name='title' value={this.state.title}/>
                </div>
                <div>
                <label htmlFor='content'>Content: </label>
                <input onChange={this.handleChange} type='text' name='content' value={this.state.content}/>
                </div>
                <div>
                <label htmlFor='photo_url'>Selfie: </label>
                <input onChange={this.handleChange} type='text' name='photo_url' value={this.state.photo_url}/>
                </div>
                <button>Save</button>
                </form>
                </NewPostForms>
                
                
        );
    }
}

export default NewPostForm;