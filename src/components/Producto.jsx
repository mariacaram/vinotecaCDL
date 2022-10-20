import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect, useState } from 'react';
const Producto = ({producto, cart, setCart}) => {
  
const [isInCart, setIsInCart] = useState(false)
const addToCart = () => {
  setCart((cart) => cart.concat ({producto}))
console.log (cart.length)
}
    
useEffect(() => {
    const inCart = cart.find ((productCart) =>productCart.producto._id === producto._id)
    if(inCart) {
      setIsInCart (true)
    }
  
}, [cart])
  
    return (

        <Card className="col-sm-12 col-md-4 col-lg-3 my-3">
 <div className="card-fold position-relative">
 <img className="card-img w-100 h-auto" src={producto.foto} alt="algo" />
 </div>

      {/* <Card.Img variant="top" src={producto.foto} />  */}
      <Card.Body>
        <Card.Title>{producto.nombreProducto}</Card.Title>
        <Card.Text>
          {producto.nombreProducto}
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