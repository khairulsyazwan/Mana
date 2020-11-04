import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function Navigation() {
    return (
        <>
        <Navbar variant="dark" className="navi">
  
          <Nav className="mx-auto">
          <NavLink className="nav-link font-weight-bold brand" to="/">MANA</NavLink>
          </Nav>

        </Navbar>
      </>
    )
}

export default Navigation


