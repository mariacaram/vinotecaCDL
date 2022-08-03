import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
const Producto = ({producto, cart, setCart}) => {
  
const [isInCart, setIsInCart] = useState(false)
const addToCart = () => {
  setCart((cart) => cart.concat ({producto}))
console.log (cart.length)
}
    
useEffect(() => {
    const inCart = cart.find ((productCart) =>productCart.producto.id === producto.id)
    if(inCart) {
      setIsInCart (true)
    }
  
}, [cart])
  
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.foto} /> 
      <Card.Body>
        <Card.Title>{producto.nombreProducto}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <button
                    disabled={isInCart}
                    className={
                        isInCart ? 'btn btn-secondary' : 'btn border-success btn-cart '
                    }
                    onClick={addToCart}
                >
                    {isInCart ? (
                        'Esta en el carrito'
                    ) : (
                        <img src="https://icongr.am/material/cart.svg?size=30&color=2ca049" alt="" />
                    )}
                </button>
    </Card>
    );
};

export default Producto;