import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="my-5 mainSection">
      <h1 className="text-center">Registro</h1>

      <Container>
        <Form
          className="mx-auto shadow p-4"
          style={{ maxWidth: "800px" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group className="mb-3" controlId="userName">
            <Form.Control
              type="text"
              placeholder="Ingrese un nombre de usuario"
              {...register("username", {
                required: "El nombre de usuario es obligatorio",
              })}
            />
            {errors.username && (
              <Form.Text className="text-danger">
                {errors.username?.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="userEmail">
            <Form.Control
              type="email"
              placeholder="Ingrese un email"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/,
                  message:
                    "El email debe tener el siguiente formato mail@dominio.com",
                },
              })}
            />
            {errors.email && (
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="userPassword">
            <Form.Control
              type="password"
              placeholder="Ingrese un password"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
                },
              })}
            />
            {errors.password && (
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Registro;
