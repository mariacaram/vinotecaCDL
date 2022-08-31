import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ItemUsuario = (props) => {
  const URLENV = process.env.REACT_APP_API_URL
  const URL = `${URLENV}usuario/${props.usuario._id}`
  const eliminarUsuario = () => {
    console.log(URL);
    Swal.fire({
      title: "Estas seguro que deseas borrar el usuario?",
      text: "No podrás recuperar el usuario una vez eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
      // cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          console.log(respuesta);
          if (respuesta.status === 200) {
            // Asumimos que se borro el producto
            Swal.fire("Borrado", "Usuario eliminado", "success");
            props.consultarApiUsuario();
          }
          // Mostrar cartel de error
        } catch (error) {}
      }
    });
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>
        {props.usuario.nombreUsuario}
        <span className="fw-bolder">
          - mail: ${props.usuario.mailUsuario}
        </span>
      </p>
      <div>
        <Link
          className="btn btn-warning me-2 "
          to={`/editarUsuario/${props.usuario._id}`}
        >
          Editar
        </Link>

        <Button variant="danger" onClick={() => eliminarUsuario()}>
          Borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemUsuario;
