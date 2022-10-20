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
import EditarProducto from './components/productos/EditarProducto';
import AgregarUsuario from "./components/Usuarios/AgregarUsuario"
import ListaUsuario from './components/Usuarios/ListaUsuario';
import Cart from './components/pages/Cart';
import './animation.css';
import ProductCart from './components/pages/ProductCart';
import EditarUsuario from './components/Usuarios/EditarUsuario';
function App() {
  const URL = process.env.REACT_APP_API_URL;
// console.log (URL)
const [productos, setProductos] = useState ([]);
const [usuarios, setUsuarios] = useState ([]);
const [cart, setCart] = useState ([]);
const [usuarioLogueado, setUsuarioLogueado] = useState ([])
useEffect (()=>{
  consultarApi() // eslint-disable-next-line react-hooks/exhaustive-deps
  consultarApiUsuarios(); // eslint-disable-next-line react-hooks/exhaustive-deps
} , []);

const consultarApi = async() => {try {
const respuesta = await fetch (`${URL}productos`)
const dato =  await respuesta.json()
// console.log (dato)
setProductos(dato)} catch(error) {
// console.log (error)
}
}
const consultarApiUsuarios = async() => {try {
  const respuesta = await fetch (`${URL}usuario`)
  const dato =  await respuesta.json()
  // console.log (dato)
  setUsuarios(dato); console.log("funciona consultar api usuarios")} catch(error) {
  // console.log (error)
  }
  }
  return (
    <Router>
      <Navigation cart = {cart} usuarioLogueado = {usuarioLogueado} ></Navigation>

      <Routes>
        <Route exact path = "/" element= {<Inicio></Inicio>}></Route>
        <Route exact path = "/store" element= {<Store productos = {productos} cart = {cart} setCart = {setCart}></Store>}></Route>
        <Route exact path = "/Cart" element= {<Cart productos = {productos}consultarApi = {consultarApi} cart = {cart} setCart = {setCart} ></Cart>}></Route>  
        <Route exact path = "/adminBoard" element= {<ListaProductos productos = {productos}consultarApi = {consultarApi} ></ListaProductos>}></Route>
        <Route exact path = "/login" element= {<Login setUsuarioLogueado = {setUsuarioLogueado} ></Login>}></Route>
        <Route exact path = "/productocarrito" element= {<ProductCart></ProductCart>}></Route>
        <Route exact path = "/nuevo" element= {<AgregarProducto consultarApi = {consultarApi}></AgregarProducto>}></Route>
        <Route
          exact
          path="/editar/:_id"
          element={<EditarProducto consultarApi={consultarApi}></EditarProducto>}
        ></Route>
        <Route exact path = "/register" element= {<AgregarUsuario consultarApiUsuarios = {consultarApiUsuarios}></AgregarUsuario>}></Route>
        <Route exact path = "/adminBoardUsuario" element= {<ListaUsuario usuarios = {usuarios}consultarApiUsuarios = {consultarApiUsuarios} ></ListaUsuario>}></Route>
        <Route
          exact
          path="/editarUsuario/:_id"
          element={<EditarUsuario consultarApiUsuarios={consultarApiUsuarios}></EditarUsuario>}></Route>
        
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
