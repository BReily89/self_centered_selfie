import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewJournalForm from './NewJournalForm'
class Journals extends Component {
    state = {
        journals: [],
        showNewForm: false
    }
    componentWillMount () {
        this.getAllJournals()
    }
    getAllJournals = async () => {
    const res = await axios.get('/api/journals')
    this.setState({creatures: res.data})
    } 
    toggleShowNewForm = () => {
        this.setState({showNewForm: !this.state.showNewForm})
    }
    render() {
        return (
            <div>
            <h1>Journal Entries</h1>
            {this.state.journals.map(journal => (
                <Link key={journal._id} to={`/${journal._id}`}>
                <h3>name: {journal.name}</h3>
                <p>Description: {journal.description}</p>
                </Link>
            ))}
            <button onClick={this.toggleShowNewForm}>New Journal</button>
            {this.state.showNewForm ? <NewJournalForm getAllJournals={this.getAllJournals}/> : null}
            <div>
                </div>
                
            </div>
        )
    }
}

export default Journals;