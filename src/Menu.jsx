import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">PROYECTO FINAL SIMULADOR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">INICIO</Nav.Link>
            <Nav.Link href="/Categorias">CATEGORIAS</Nav.Link>
            <Nav.Link href="/Todos">TODOS LOS ARTICULOS</Nav.Link>
            <Nav.Link href="/Usuarios">USUARIOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
