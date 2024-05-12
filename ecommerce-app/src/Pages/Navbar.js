import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} to="/register">Register</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;