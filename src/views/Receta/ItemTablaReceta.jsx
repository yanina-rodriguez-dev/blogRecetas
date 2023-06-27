import { Button } from "react-bootstrap";

const ItemTablaReceta = ({receta}) => {
    return (
        <tr>
            <td>{receta.id}</td>
            <td>{receta.nombreReceta}</td>
            <td>{receta.imagen}</td>
            <td>{receta.descripcion}</td>
            <td>
                <Button className="me-2 btn" variant="warning">
                    Editar
                </Button>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemTablaReceta;
