import React from 'react';
import { Card, Col, Row, Container, CardDeck } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



function CardDisplay({ info, topic }) {
    return (
        <Container>
        <Row className="my-2">
            <CardDeck>
          {info.map((single) => (
            <Col key={single.id} md={4} className="my-3 boxes">

            <Card border="light"  style={{ backgroundImage: `url(${single.bgurl})`, height: "30vh", backgroundSize: 'cover'}}>

            <Card.Title className="m-auto text-center font-weight-bold">
                <NavLink to={`/${topic}/${single.id}`} className="nav-link cardnav"><h1>{single.name}</h1> </NavLink>
            </Card.Title>
            </Card>

            </Col>
            
            
          ))}  
          </CardDeck>
          </Row>
        </Container>
    )
}

export default CardDisplay
