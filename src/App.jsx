import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import Inicio from "./components/pages/Inicio"
import ListaProductos from './components/productos/ListaProductos';
import Login from './components/pages/Login';
import Store from './components/pages/Store';
import { useState, useEffect } from 'react';
import AgregarProducto from './components/productos/AgregarProducto';
function App() {
  const URL = process.env.REACT_APP_API_URL;
console.log (URL)
const [productos, setProductos] = useState ([])
useEffect (()=>{consultarApi()} , []);

const consultarApi = async() => {try {
const respuesta = await fetch (URL)
const dato =  await respuesta.json()
console.log (dato)
setProductos(dato)} catch(error) {
console.log (error)
}
}
  return (
    <Router>
      <Navigation></Navigation>

      <Routes>
        <Route exact path = "/" element= {<Inicio></Inicio>}></Route>
        <Route exact path = "/store" element= {<Store productos = {productos}></Store>}></Route>

        <Route exact path = "/adminBoard" element= {<ListaProductos productos = {productos} ></ListaProductos>}></Route>
        <Route exact path = "/login" element= {<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
