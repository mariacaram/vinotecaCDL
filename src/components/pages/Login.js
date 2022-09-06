import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { CardsLogin } from '../CardsLogin/CardsLogin'
import {campoRequerido} from "../helpers/helpers";
import {Link} from "react-router-dom"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {

  const [mailUsuario, setMailUsuario] = useState("");
  const [password, setPassword] = useState("");


  const [error, setError] = useState(false);
  const [errorMje, setErrorMje] = useState("");
  const URL = process.env.REACT_APP_API_URL;

    const handleSubmit = async (e) => {
      console.log("funciona el boton")
      e.preventDefault();
    //validar los datos del form
    if (campoRequerido(mailUsuario)) {
      // reset el state de error
      setError(false);
      // crear el objeto con los datos del usario a verificar
      const usuario = {
        mailUsuario: mailUsuario,
        password: password,
      };

      try {
        
        const parametros = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        };
        const respuesta = await fetch(`${URL}login`, parametros);
        //console.log(respuesta)
        const dato = await respuesta.json();
        if (respuesta.status === 200) {
          // mostrar cartel al usuario
          Swal.fire(
            "Usuario logueado!",
            "Autentificación exitosa",
            "success"
          );
          // resetear el formulario
          e.target.reset(); //el e.target en este caso por el submitt es el form
          //Guardo el token de acceso del usaurio en localStorage
          localStorage.setItem("accessToken", dato.accessToken);
          // redireccion a la pagina de lista de noticias

        } else {
         // console.log(dato.mensaje);
          setError(true);
          dato.mensaje && setErrorMje(dato.mensaje);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      //mostral cartel de error
      setError(true);
      setErrorMje("Debe ingresar un email valido");
    }
  };
    return (
        <Container id="main-container" className="d-grid h-100">
      <Form onSubmit={handleSubmit} id="sign-in-form" className="text-center w-100" >
        <img
          className="mb-4 logo-register"
          src="data:image/png;base64,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"
          alt="Bootstrap 5"
        />
        <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
      <Form.Group controlId="sign-in-email-address">
        <Form.Control type="text" 
        size="lg" 
        placeholder="email address" 
        autoComplete="username" 
        className="position-relative" 
        onChange={(e) => setMailUsuario(e.target.value)}>

        </Form.Control>
        <Form.Group controlId="sign-in-password" class="mb-3">
        <Form.Control  
        type= "password"
        size="lg" 
        placeholder="password" 
        autoComplete="current-password" 
        className="position-relative"
        onChange={(e) => setPassword(e.target.value)}>
        
        </Form.Control>
        </Form.Group>
      </Form.Group>
      <Form.Group controlId="remember-me" className="d-flex justify-content-center mb-4">
      <Form.Check label="Remember me"/>
      </Form.Group>
      <div className="d-grid">
      <Button
      variant="primary" 
      size="lg" 
      type="submit">Sign in</Button>
      <Link to="/Register" className="nav-link">Register</Link>

      </div>
      <p className="mt-5 text-muted">
        &copy; 2022
      </p>
      </Form>
    </Container>
    )
}

export default Login