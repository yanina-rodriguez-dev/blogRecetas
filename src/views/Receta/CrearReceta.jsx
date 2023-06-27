import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const CrearReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (nuevaReceta) => {
    console.log(nuevaReceta);
    crearReceta(nuevaReceta).then((respuesta)=>{
      if(respuesta.status ===201){
    Swal.fire('Producto creado', `La receta ${nuevaReceta.nombreReceta} fue creado correctamente`, 'success');
    reset();
      }else{
        Swal.fire('Ocurrio un error',  `La receta ${nuevaReceta.nombreReceta} no pudo ser creada`, 'error')
      }
    });
  };

  return (
    <section className="container mainSection my-4">
      <h1 className="text-center">Crear nueva receta</h1>

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
             {errors.descripcion && (
              <Form.Text className="text-danger">
                {errors.descripcion.message}
              </Form.Text>
            )}
          </FloatingLabel>

          <Button variant="primary" type="submit" className="mt-3">
            Enviar
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default CrearReceta;
