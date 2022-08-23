import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import ItemUsuario from "./ItemUsuario"
import {Link} from 'react-router-dom'

const ListaUsuario = (props) => {

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Lista de usuarios</h1>
      <hr />
      <article className="d-flex align-items-center mb-4 justify-content-end">
        <p className="my-0 me-4 fw-bold">Agregar nuevos usuarios: </p>
<Link to="/nuevo" className="btn btn-primary">Agregar</Link>
      </article>
      <ListGroup>
{props.usuarios.map ((usuario)=><ItemUsuario key= {usuario._id} usuario = {usuario} consultarApi= {props.consultarApiUsuario}></ItemUsuario>)}
      </ListGroup>
    </Container>
  );
};

export default ListaUsuario;