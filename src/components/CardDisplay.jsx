import React from 'react';
import { Card, Col, Row, Container, CardDeck } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



function CardDisplay({ info, topic }) {
    return (
        <Container>
        <Row className="my-5">
            <CardDeck>
          {info.map((single, index) => (
            <Col md={4} className="my-3">
            <Card key={single.id} border="dark" >
            <Card.Body>
                <h1>{single.name}</h1> 
          
                <NavLink to={`/${topic}/${single.id}`} className="btn btn-warning btn-block">View</NavLink>
            </Card.Body>
            </Card>
            </Col>
            
            
          ))}  
          </CardDeck>
          </Row>
        </Container>
    )
}

export default CardDisplay
