import React, { Component } from 'react';
import axios from 'axios'

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
        );
    }
}

export default NewJournalForm;