import { Navbar, Nav, Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import { Component } from "react";
import React from 'react';

const Navigation = ({cart, usuarioLogueado}) => {
  return (

    <Navbar bg="primary" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#home">CRUD Cafe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
<Link to="/" className="nav-link">Inicio</Link>
<Link to="/adminBoard" className="nav-link">Admin Board</Link>
<Link to="/store" className="nav-link">Store</Link>
<Link to="/login" className="nav-link">Login</Link>
<Link to="/Register" className="nav-link">Register</Link>
<Link to="/cart" className="nav-link" >Carrito <span className="badge bg-warning">{cart.length}</span></Link>
<Link to="/adminBoardUsuario" className="nav-link">Usuarios</Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );


};

export default Navigation;