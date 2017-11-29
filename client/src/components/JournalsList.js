import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import styled from 'styled-components'

const Container = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
padding-top: 5px;
padding-bottom: 10px;
background-color: white;
align-items: center;
`
class JournalsList extends Component {
    
    
    render() {
        
        const {journals} = this.props
        return (
            <Container>
            <div>
                {
                    journals.map((journal) => {
                        <Card key={journal.id} style={{
                            margin: "5px",
                        }}>
                        <CardMedia
                        overlay={<CardTitle title={journal.name} />} >
                        </CardMedia>
                        <CardText style={{
                            margin: "5px",
                        }}>
                        {journal.description}
                        </CardText>
                        <FlatButton href={`/journals/${journal.id}`}
                        label={`view posts for ${journal.name}`}
                    
                        style={{backgroundColor: "720FF",
                        margin: "5px"}}/>
                        </Card>
                        // </div>
                    })
                }
                </div>  
                </Container>
                
        );
    }
}

export default JournalsList;