import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Navigation from "../common/Navigation";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { campoRequerido, rangoNumero } from "../helpers/helpers";

const Register =(props) => {
    const [nombreUsuario, setUsuario] = useState("");
  const [apellidoUsuario, setApellidoUsuario] = useState("");
  const [dniUsuario, setdniUsuario] = useState("");
  const [mailUsuario, setMailUsuario] = useState("");
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL);
  const handleSubmitUsuario = async (e) => {
    e.preventDesfault();
    if (
      campoRequerido(nombreUsuario) &&
      campoRequerido(apellidoUsuario) &&
      campoRequerido(mailUsuario) &&
      rangoNumero(dniUsuario)
    ) {
      const UsuarioNuevo = {
        nombreUsuario: nombreUsuario,
        apellidoUsuario: apellidoUsuario,
        dniUsuario: dniUsuario,
        mailUsuario: mailUsuario,
      };
      try {
        const parametrosUsuario = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(UsuarioNuevo),
        };
        const respuestaUsuario = await fetch(`${URL}usuario`, parametrosUsuario);
        console.log(respuestaUsuario);
        if (respuestaUsuario.status === 201) {
          Swal.fire(
            "Usuario creado",
            "Su usuario fué creado con éxito",
            "success"
          );
        //   e.target.reset();
          props.consultarApi();
        //   navigation("/store")
        } else {
          console.log("Debería mostrar error");
        }
      } catch (error) {}
    }
  };

  return (
    <div className="container-register">
      ;
      <Container>
        <section className="row row-cols-4 row-cols-lg-2">
          <div className=" text-format d-flex flex-column aling-items-center align-items-md-start pb-0 ">
            <Form onSubmit={handleSubmitUsuario}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>D.N.I.</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Button as="input" type="reset" value="Registrarse" />
            </Form>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Register;