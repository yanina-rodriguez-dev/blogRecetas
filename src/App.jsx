import Registro from "./views/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./views/Login";
import Nav from "./common/Nav";
import Footer from "./common/Footer";
import Inicio from "./views/Inicio";

function App() {
    return (
        <>
            <Nav></Nav>
            <Inicio></Inicio>
            <Registro></Registro>
            <Login></Login>
            <Footer></Footer>
        </>
    );
}

export default App;
