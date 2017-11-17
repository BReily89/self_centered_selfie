import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const New = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
padding-top: 5px;
padding-bottom: 10px;
background-color: white;`

class NewJournalForm extends Component {
        state = {
            name: '',
            description: ''
        }
        
    handleChange = (event) => {
        const name = event.target.name
        const newState = {...this.state}
        newState[name] = event.target.value
        this.setState(newState)
    }
    handleSumbit = async (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.name,
            description: this.state.description
        }
        await axios.post(`/api/journals`, payload)
        await this.props.getAllJournals()
    }
    render() {
        return (
            <New>
            <form onSubmit={this.handleSumbit}>
            <div>
            <label htmlFor='name'>Name:</label>
            <input onChange={this.handleChange} type='text' name='name' value={this.state.name}/>
            </div>
            <div>
            <label htmlFor='description'>description:</label>
            <input onChange={this.handleChange} type='text' name='description' value={this.state.description}/>
            </div>
            <button>Save</button>
            </form>
            </New>
        );
    }
}

export default NewJournalForm;