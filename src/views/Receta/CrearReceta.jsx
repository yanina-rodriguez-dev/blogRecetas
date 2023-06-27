import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CrearReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            <Form.Control as="textarea" style={{ height: "150px" }} />
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
