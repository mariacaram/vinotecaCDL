import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import Inicio from "./components/pages/Inicio"
import ListaProductos from './components/productos/ListaProductos';
import Login from './components/pages/Login';
import Store from './components/pages/Store';
function App() {
  return (
    <Router>
      <Navigation></Navigation>

      <Routes>
        <Route exact path = "/" element= {<Inicio></Inicio>}></Route>
        <Route exact path = "/store" element= {<Store></Store>}></Route>

        <Route exact path = "/adminBoard" element= {<ListaProductos></ListaProductos>}></Route>
        <Route exact path = "/login" element= {<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
