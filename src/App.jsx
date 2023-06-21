import Registro from "./views/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./views/Login";
import Nav from "./common/Nav";
import Footer from "./common/Footer";
import Error404 from "./views/Error404";
import Administrador from "./views/Administrador"

function App() {
    return (
        <>
            <Nav></Nav>
           <Administrador></Administrador>
           
            <Footer></Footer>
        </>
    );
}

export default App;
