import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemTablaReceta = ({ receta, handleBorrarReceta }) => {
  const handleBorrarClick = () => {

    
    handleBorrarReceta(receta.id);
  };

  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>{receta.imagen}</td>
      <td>{receta.descripcion}</td>
      <td>
        <Link className="me-2 btn btn-warning" variant="warning" to={`/administrador/editar-receta/${receta.id}`}>
          Editar
        </Link>
        <Button variant="danger" onClick={handleBorrarClick}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemTablaReceta;

