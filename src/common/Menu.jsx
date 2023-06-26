import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';

const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>Cocinar es Amor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className='nav-item nav-link' to='/Registro'>Registro</NavLink>
            <NavLink end className='nav-item nav-link' to='/'>Inicio</NavLink>
            {
              (usuarioLogueado.nombreUsuario)?
              <>
              <NavLink end className='nav-item nav-link' to='/Administrador'>Administrador</NavLink>
             <Button variant="danger">Logout</Button>
              </>:
            <NavLink end className='nav-item nav-link' to='/login'>Iniciar Sesion</NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;