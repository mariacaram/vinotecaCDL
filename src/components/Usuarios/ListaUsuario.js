import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import ItemUsuario from "./ItemUsuario"
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table';

const ListaUsuario = (props) => {

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Lista de usuarios</h1>
      <hr />
      <article className="d-flex align-items-center mb-4 justify-content-end">
        <p className="my-0 me-4 fw-bold">Agregar nuevos usuarios: </p>
<Link to="/register" className="btn btn-primary">Agregar</Link>
      </article>
      <Table striped>
       <thead>
       <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>DNI</th>
          <th>Mail</th>
          <th>Rol</th>
          <th>Acciones</th>
        </tr>
        </thead>
{props.usuarios.map ((usuario)=><ItemUsuario key= {usuario._id} usuario = {usuario} consultarApi= {props.consultarApiUsuario}></ItemUsuario>)}
        </Table>
      
    </Container>
  );
};

export default ListaUsuario;