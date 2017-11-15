import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
class JournalsList extends Component {
    render() {
        const {journals} = this.props
        return (
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
                    
                    })
                }
                </div>  
        );
    }
}

export default JournalsList;