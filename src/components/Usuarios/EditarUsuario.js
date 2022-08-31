import React from "react";
import { Form, Modal, Button, Container, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { campoRequerido, rangoNumero } from "../helpers/helpers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const EditarUsuario = (props) => {
  const { _id } = useParams();
  // console.log(_id);
  const [usuario, setUsuario] = useState({});
  const [rol, setRol] = useState("");
  const URL = process.env.REACT_APP_API_URL + "/usuario/" + _id;
  console.log(URL)
  //crear variables ref
  const nombreUsuarioRef = useRef("");
  const apellidoUsuarioRef = useRef("");
  const dniUsuarioRef = useRef(0);

  const mailUsuarioRef = useRef("");
  const rolUsuarioRef = useRef("");

  const navigation = useNavigate();

  useEffect(async () => {

    // consultar a la api el producto que tiene el id
    try {
      // realizar una consulta GET
      const respuesta = await fetch(URL);
      // console.log(respuesta)
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        // console.log(dato);
        setUsuario(dato);
        setRol(dato.rol);
      }
    } catch (error) {
      console.log(error);
      //mostrar cartel error al usuario
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //validar los campos
    // console.log(nombreProductoRef)
    // console.log(nombreProductoRef.current.value)
    if (
      campoRequerido(nombreUsuarioRef.current.value)     //   campoRequerido(rol)
    ) {
      //console.log('aqui envio los datos')
      //construir el objeto a enviar a la api
      const usuarioModificado = {
        nombreUsuario: nombreUsuarioRef.current.value,
        mailUsuario: mailUsuarioRef.current.value,
        apellidoUsuario: apellidoUsuarioRef.current.value,
        dniUsuario: dniUsuarioRef.current.value,
        rol: rolUsuarioRef.current.value,

        // rol,
      };
      // console.log(productoModificado)
      try {
        //consulta PUT para modificar valores en la api
        const respuesta = await fetch(URL, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(usuarioModificado),
        });

        console.log(respuesta);
        if (respuesta.status === 200) {
          console.log("Funciona ok");
          //mostrar un cartel al usuario
          Swal.fire(
            "Usuario modificado",
            "Su usuario fue correctamente actualizado",
            "success"
          );
          //consultar nuevamente a la api
          props.consultarApiUsuario();
          navigation("/store")
          
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      //mostrar un cartel error
      console.log("mostrar el error");
    }
  };

  return (
    <Container>
      <h1 className="display-3 text-center my-4">Editar Usuario</h1>
      <hr />
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del usuario*</Form.Label>
          <Form.Control
            type="text"
            placeholder="María"
            defaultValue={usuario.nombreUsuario}
            ref={nombreUsuarioRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mail del usuario*</Form.Label>
          <Form.Control
            type="text"
            placeholder="María@gmail.com"
            defaultValue={usuario.mailUsuario}
            ref={mailUsuarioRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="ej: 50"
            defaultValue={usuario.apellidoUsuario}
            ref={apellidoUsuarioRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="Number"
            placeholder="ej: 50"
            defaultValue={usuario.dniUsuario}
            ref={dniUsuarioRef}
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Rol</Form.Label>
          <Form.Select
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          >
            <option value="">Seleccione una opcion</option>
            <option value="admin">Admin</option>
            <option value="aser">User</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Guardar cambios
        </Button>
      </Form>
    </Container>
  );
};

export default EditarUsuario;