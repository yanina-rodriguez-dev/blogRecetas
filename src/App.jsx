import Registro from "./views/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./views/Login";
import Nav from "./common/Nav";
import Footer from "./common/Footer";
import Error404 from "./views/Error404";

function App() {
    return (
        <>
            <Nav></Nav>
           
            <Error404></Error404>
            <Footer></Footer>
        </>
    );
}

export default App;
