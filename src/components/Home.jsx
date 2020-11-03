import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



function Home() {


    return (
    <div className="home">
        <Container className="text-center d-flex align-items-center justify-content-center" style={{height: "90vh", width: "100vw"}}>
            <div className="align-items-center">
            <h1>MANA</h1>
            <h3>All geared up and ready to go. But one question still remains, where to? Mana is here to help you plan and decide your next ride.</h3>
            {/* <NavLink to={`/roads`} className="btn btn-primary">Roads</NavLink>
            <NavLink to={`/places`} className="btn btn-primary">Places</NavLink> */}

            <div className="d-flex justify-content-center info">
                <div className="mx-5 p-3 item">
                <i class="fas fa-road d-block"></i>
                <NavLink to={`/roads`} className="font-weight-bold nav-link">Roads</NavLink>
                    
                </div>
                <div className="mx-5 p-3 item">
                <i class="fas fa-camera d-block"></i>
                <NavLink to={`/places`} className="font-weight-bold nav-link">Places</NavLink>
                </div>
            </div>
            </div>
        </Container>

    </div>
    )
}

export default Home


