import React from 'react';
import { Card, Button} from 'react-bootstrap'
import Producto from '../Producto';

const Store = ({productos}) => {
const mapProductos = productos.map((producto, i) => (<Producto key = {i} producto = {producto}></Producto>)) 

    return (
      <div className="d-flex flex-wrap justify-content-between">{mapProductos}

      </div>
    )
};

export default Store;