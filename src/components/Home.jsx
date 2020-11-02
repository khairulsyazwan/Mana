import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



function Home() {

    return (
    <div>
        <Container className="text-center d-flex align-items-center justify-content-center" style={{height: "90vh", width: "100vw"}}>
            <div className="align-items-center">
            <h1>MANA</h1>
            <p>It's time to ride. But where to?</p>
            <NavLink to={`/roads`} className="btn btn-primary">Roads</NavLink>
            <NavLink to={`/places`} className="btn btn-primary">Places</NavLink>
            </div>
        </Container>

    </div>
    )
}

export default Home


