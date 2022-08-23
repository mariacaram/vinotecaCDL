import React from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useState } from "react";
import { campoRequerido, rangoNumero } from "../helpers/helpers";
import Swal from "sweetalert2";
import Navigation from "../common/Navigation";
import { useNavigate } from "react-router-dom";
const AgregarProducto = (props) => {
  const [nombreProducto, setProducto] = useState("");
  const [precioProducto, setPrecio] = useState(0);
  const [foto, setFoto] = useState("");
  const [categoria, setCategoria] = useState("");
  const URL = process.env.REACT_APP_API_URL;
const navigation = useNavigate();
  console.log(`${URL}productos`);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      campoRequerido(nombreProducto) &&
      campoRequerido(foto) &&
      campoRequerido(categoria) &&
      rangoNumero(precioProducto)
    ) {
      const productoNuevo = {
        nombreProducto: nombreProducto,
        precioProducto: precioProducto,
        foto: foto,
        categoria: categoria,
      };
      try {
        const parametros = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productoNuevo),
        };
        
        const respuesta = await fetch(`${URL}productos`, parametros);
        console.log(respuesta);
        if (respuesta.status === 201) {
          Swal.fire(
            "Producto creado",
            "Su producto fué creado con éxito",
            "success"
          );
          e.target.reset();
          props.consultarApi();
          navigation("/store")
        } else {
          console.log("Debería mostrar error");
        }
      } catch (error) {}
    }
  };
  return (
    <Container>
      <h1 className="display-3 text-center my-4">Nuevo Producto</h1>
      <hr />
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Vino Don David"
            onChange={(e) => setProducto(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="ej: 3500"
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Link para imagen"
            maxLength={500}
            onChange={(e) => setFoto(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select onChange={(e) => setCategoria(e.target.value)}>
            <option>Seleccione una opcion</option>
            <option value="Malbec">Malbec</option>
            <option value="Bonarda">Bonarda</option>
            <option value="Tanat">Tanat</option>
            <option value="Cabernet">Cabernet</option>
            <option value="Blend">Blend</option>
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
