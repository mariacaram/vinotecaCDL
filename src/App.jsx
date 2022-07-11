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
function App() {

const [productos, setProductos] = useState ([])
useEffect (()=>{consultarApi()} , []);

const consultarApi = async() => {try {
const respuesta = await fetch ("http://localhost:3003/productos")
const dato =  respuesta.json()
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
        <Route exact path = "/store" element= {<Store></Store>}></Route>

        <Route exact path = "/adminBoard" element= {<ListaProductos productos={productos}></ListaProductos>}></Route>
        <Route exact path = "/login" element= {<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
