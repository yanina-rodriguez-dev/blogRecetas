import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (usuario) => {
    console.log(usuario);
  };

  return (
    <>
      <section className="container mainSection">
        <h1 className="pt-4 text-center">Iniciar sesion</h1>
        <div className="m-4 d-flex justify-content-center pt-3">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="container contenedorCentrado p-3"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresar email"
                {...register("email", {
                  required: "el email es un dato obligatorio",
                  pattern: {
                    value: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/,
                    message:
                      "el email debe tener el siguiente formato mail@dominio.com",
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Clave</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresar constraseña"
                {...register('password', {
                  required:'La clave es obligatoria',
                  pattern: {
                    value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
                    message: 'Debe tener al menos 8 caracteres, una letra mayúscula, al menos una letra minúscula, al menos un dígito numérico y puede contener caracteres especiales'
                  }
                })
                }
              />
              <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordar contraseña" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Iniciar sesion
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default login;
