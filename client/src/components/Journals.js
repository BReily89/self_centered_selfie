import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewJournalForm from './NewJournalForm'
import styled from 'styled-components'


const JournalWrapper = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
padding-top: 5px;
padding-bottom: 30px;
align-content: center;
font-size: 20px;
`


class Journals extends Component {
    state = {
        journals: [],
        showNewForm: false
    }
    componentWillMount () {
        console.log('fuck right')
        this.getAllJournals()
    }
    getAllJournals = async () => {
        const res = await axios.get('/api/journals')
        console.log(res)
        this.setState({journals: res.data})
    } 
    toggleShowNewForm = () => {
        this.setState({showNewForm: !this.state.showNewForm})
    }
    render() {
         

        // console.log(this.state.journals);
        return (
            <JournalWrapper>
            <div>
            <h1>Journal Entries</h1>
            {this.state.journals.map((journal) => (
                <Link key={journal.id} to={`/journals/${journal.id}`}>
                <h3>Mood: {journal.name}</h3>
                <p>Mood description: {journal.description}</p>
                </Link>
            ))}
            <button onClick={this.toggleShowNewForm}>New Journal</button>
            {this.state.showNewForm ? <NewJournalForm getAllJournals={this.getAllJournals}/> : null}
            <div>
                </div>
            </div>
            </JournalWrapper>
        )
    }
}

export default Journals;