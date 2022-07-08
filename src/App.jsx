import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Navigation from './components/common/Navigation';
import Inicio from "./components/pages/Inicio"
function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route exact path = "/" element= {<Inicio></Inicio>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
