import React from 'react';
import { Card, Button} from 'react-bootstrap'
import Producto from '../Producto';

const Store = ({productos, cart, setCart}) => {
const mapProductos = productos.map((producto, i) => (<Producto key = {i} producto = {producto} cart = {cart} setCart = {setCart
}></Producto>)) 

    return (
      <div className="d-flex flex-wrap justify-content-between">{mapProductos}

      </div>
    )
};

export default Store;