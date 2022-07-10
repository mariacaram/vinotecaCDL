import { Navbar, Nav, Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import { Component } from "react";
import React from 'react';

class Navigation extends Component {
    render (){
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home">CRUD Cafe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
<Link to="/" className="nav-link">Inicio</Link>
<Link to="/productos" className="nav-link">Productos</Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}}

export default Navigation;
