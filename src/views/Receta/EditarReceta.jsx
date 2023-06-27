import { useEffect } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { editarReceta, obtenerReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const { id } = useParams();

  useEffect(() => {
    obtenerReceta(id).then((respuesta) => {
      if (respuesta) {
        //carga en el formulario los datos del objeto
        setValue("nombre", respuesta.nombreReceta);
        setValue("imagen", respuesta.imagen);
        setValue("descripcion", respuesta.descripcion);
      }
    });
  }, []);

  const onSubmit = (recetaEditada) => {
    console.log(recetaEditada);
    //AGREGAR LA CONSULTA A LA API QUE PIDE EDITAR
    editarReceta(id, recetaEditada).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Producto creado",
          `La receta ${recetaEditada.nombreReceta} fue EDITADA correctamente`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Ocurrio un error",
          `La receta ${recetaEditada.nombreReceta} no pudo ser EDITADA`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection my-4">
      <h1 className="text-center">Editar Receta</h1>

      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Nombre de la receta"
              {...register("nombre", {
                required: "El nombre de la receta es obligatorio",
              })}
            />
            {errors.nombre && (
              <Form.Text className="text-danger">
                {errors.nombre.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Imagen de la receta"
              {...register("imagen", {
                required: "La imagen de la receta es obligatoria",
              })}
            />
            {errors.imagen && (
              <Form.Text className="text-danger">
                {errors.imagen.message}
              </Form.Text>
            )}
          </Form.Group>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="Descripción de la receta"
          >
            <Form.Control
              as="textarea"
              style={{ height: "150px" }}
              {...register("descripcion", {
                required: "La descripcion de la receta es obligatoria",
              })}
            />
          </FloatingLabel>

          <Button variant="primary" type="submit" className="mt-3">
            Enviar
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default EditarReceta;
