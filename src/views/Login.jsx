import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const login = () => {
  return (
    <>
    <div className="text-center mt-4">
        <h1 className="pt-4">Iniciar sesion</h1>
    </div>
    <section className="m-5 d-flex justify-content-center pt-3">
      <Form className="container contenedorCentrado p-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="Ingresar email" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Clave</Form.Label>
          <Form.Control type="password" placeholder="Ingresar constraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordar contraseña" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar sesion
        </Button>
      </Form>
    </section>
    </>
  );
};

export default login;