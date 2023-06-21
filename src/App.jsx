import Registro from "./views/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./views/Login";
import Nav from "./common/Nav"
import Administrador from './views/Administrador';
import Inicio from "./views/Inicio";
import Error404 from "./views/Error404";
import Footer from "./common/Footer";



function App() {
 

  return (
    <>
    <Nav></Nav>
    <Administrador></Administrador>
      
    </>
  )
}

export default App;
