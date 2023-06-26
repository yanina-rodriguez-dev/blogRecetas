import Registro from "./views/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./views/Login";
import Menu from "./common/Menu";
import Administrador from "./views/Administrador";
import Inicio from "./views/Inicio";
import Error404 from "./views/Error404";
import Footer from "./common/Footer";
import CrearReceta from "./views/Receta/CrearReceta";
import EditarReceta from "./views/Receta/EditarReceta";
import PaginaReceta from "./views/Receta/PaginaReceta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";



function App() {
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const[usuarioLogueado,setUsuarioLogueado]= useState(usuarioSessionStorage);

  return (
    <>
      <BrowserRouter>
        <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/administrador"
            element={<Administrador></Administrador>}
          ></Route>
          <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
          <Route
            exact
            path="/detalle-receta"
            element={<PaginaReceta></PaginaReceta>}
          ></Route>
          <Route
            exact
            path="/Administrador/editar-receta"
            element={<EditarReceta></EditarReceta>}
          ></Route>
          <Route
            exact
            path="/Administrador/crear-receta"
            element={<CrearReceta></CrearReceta>}
          ></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
