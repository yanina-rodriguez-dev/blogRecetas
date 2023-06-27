import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { iniciarSesion } from '../helpers/queries';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    console.log(usuario);

    iniciarSesion(usuario).then((respuesta) => {
      if (respuesta) {
        localStorage.setItem('usuario', JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        reset();
        navegacion('/Administrador');
      } else {
        Swal.fire('Error', 'El mail o password son incorrectos', 'error');
      }
    });
  };

  return (
    <>
      <section className="container mainSection">
        <h1 className="pt-4 text-center">Iniciar sesión</h1>
        <div className="m-4 d-flex justify-content-center pt-3">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="container contenedorCentrado p-3"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresar email"
                {...register('email', {
                  required: 'El email es un dato obligatorio',
                  pattern: {
                    value: /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/,
                    message:
                      'El email debe tener el siguiente formato mail@dominio.com',
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Clave</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresar contraseña"
                {...register('password', {
                  required: 'La clave es obligatoria',
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
                    message:
                      'Debe tener al menos 8 caracteres, una letra mayúscula, al menos una letra minúscula, al menos un dígito numérico y puede contener caracteres especiales',
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordar contraseña" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Login;
