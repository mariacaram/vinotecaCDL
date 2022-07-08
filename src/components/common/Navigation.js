import { Navbar, Nav, Container } from "react-bootstrap";


import React from 'react';

const Navigation = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home">CRUD Cafe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navigation;
