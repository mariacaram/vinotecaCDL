import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Navigation from "../common/Navigation";
import Form from "react-bootstrap/Form";

function Register() {
  return (
    <div className="container-register">
      ;
      <Container>
        <section className="row row-cols-4 row-cols-lg-2">
          <div className=" text-format d-flex flex-column aling-items-center align-items-md-start pb-0 ">
            <Form>
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