import Registro from "./views/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./views/Login";
import Nav from "./common/Nav";
import Footer from "./common/Footer";
function App() {
    return (
        <>
            <Registro></Registro>
            <Nav></Nav>
            <Login></Login>
            <Footer></Footer>
        </>
    );
}

export default App;
