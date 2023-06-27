import Table from "react-bootstrap/Table";
import ItemTablaReceta from "./Receta/ItemTablaReceta";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerListaRecetas } from "../helpers/queries";
import Swal from "sweetalert2";


const Administrador = () => {
const [recetas,SetRecetas] = useState([]);

useEffect (()=>{
//consulto api y guardo respuesta en el state 
obtenerListaRecetas().then((respuestaListaRecetas)=>{
if (respuestaListaRecetas){
    SetRecetas(respuestaListaRecetas);
}else{
    Swal.fire('Error', 'Intente realizar esta operacion en unos minutos', 'error')
}
})
},[])

    return (
        <div className="container mainSection">
            <section className="d-flex justify-content-between align-items-center mt-5">
                <h1 className=" text-center">Administrar recetas</h1>
                <Button
                    className="btn btn-primary"
                >
                    Agregar
                </Button>
            </section>
            <div className="my-3">
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre de receta</th>
                            <th>Imagen</th>
                            <th>Descripcion</th>
                            <th>Id</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>{
                        recetas.map((receta)=> <ItemTablaReceta key={receta.id} receta={receta}></ItemTablaReceta>)}
                        
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Administrador;
