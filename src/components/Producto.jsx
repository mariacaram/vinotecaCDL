import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Cards.css"

const Producto = (props) => {
    return (
        
        <div className="grid container">
          <div class="row justify-content-center">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.producto.foto} /> 
      <Card.Body>
        <Card.Title>{props.producto.nombreProducto}</Card.Title>
        <Card.Text>
          {props.producto.precioProducto}
        </Card.Text>
        <Card.Text>
          {props.producto.categoria}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    
    );
};

export default Producto;