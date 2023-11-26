import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/react.svg'


function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#Cat1">Categoria1</Nav.Link>
            <Nav.Link href="#Cat2">Categoria2</Nav.Link>
            <Nav.Link href="#Cat3">Categoria3</Nav.Link>
            <Nav.Link href="#cart"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;