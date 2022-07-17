import React from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const AgregarProducto = () => {
  return (
    <Container>
      <h1 className="display-3 text-center my-4">Nuevo Producto</h1>
      <hr />
      <Form className="my-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Vino Don David" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="ej: 3500" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" placeholder="Link para imagen" maxLength={300} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
            <option>Seleccione una opcion</option>
            <option>Malbec</option>
            <option>Bonarda</option>
            <option>Tanat</option>
            <option>Cabernet</option>
            <option>Blend</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarProducto;