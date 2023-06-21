import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const Administrador = () => {
  return (
    <>
      <div>
        <h1 className="my-4 text-center">Administrar recetas</h1>
        <hr />
      </div>
      <div className="my-5">
        <Table responsive="sm mx-2">
          <thead>
            <tr>
              <th>Cod</th>
              <th>Nombre</th>
              <th>Duracion</th>
              <th>URL de imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td><Button className="me-2" variant="warning">Editar</Button><Button variant="danger">Borrar</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td><Button className="me-2" variant="warning">Editar</Button><Button variant="danger">Borrar</Button></td>
             
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Administrador;