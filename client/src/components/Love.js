import React from 'react';
import Card from 'react-bootstrap/Card';

function Love(props) {
    return (
        <div>
            <Card border="info" style={{}}>
                <Card.Header>Username</Card.Header>
                <Card.Body>
                    <Card.Title>Info Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Love;

