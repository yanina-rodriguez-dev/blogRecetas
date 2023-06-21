import Registro from "./views/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./views/Login";
import Nav from "./common/Nav"
import Administrador from './views/Administrador';
import Inicio from "./views/Inicio";
import Error404 from "./views/Error404";
import Footer from "./common/Footer";
import PaginaReceta from "./views/Receta/PaginaReceta";
import CrearReceta from "./views/Receta/CrearReceta";
import EditarReceta from "./views/Receta/EditarReceta";



function App() {
 

  return (
    <>
    <Nav></Nav>
    {/* <Inicio></Inicio> */}
    {/* <Login></Login> */}
    {/* <Registro></Registro> */}
    {/* <Error404></Error404> */}
    {/* <PaginaReceta></PaginaReceta> */}
    <Administrador></Administrador>
    {/* <CrearReceta></CrearReceta> */}
    {/* <EditarReceta></EditarReceta> */}
    <Footer></Footer>
    </>
  )
}

export default App;
