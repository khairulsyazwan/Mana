import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';


function Navigation() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Mana</Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </Nav>

        </Navbar>
      </>
    )
}

export default Navigation


