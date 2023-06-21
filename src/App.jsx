import Registro from "./views/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./views/Login";
import Nav from "./common/Nav";
function App() {
    return (
        <>
            <Registro></Registro>
            <Nav></Nav>
            <Login></Login>
        </>
    );
}

export default App;
