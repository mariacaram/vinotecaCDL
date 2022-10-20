import React, { Component, Fragment } from 'react';
import './inicio.css';
import fondo from '../../img/fondo.jpg'
import CarouselComponent from '../Carousel';
class Inicio extends Component {
    render() {
        return (
            <div>
                <CarouselComponent></CarouselComponent>

            </div>
        );
    }
}

export default Inicio; 