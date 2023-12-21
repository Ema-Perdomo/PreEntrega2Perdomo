import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/Logo_Barbell.svg'
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='navbar-brand' to="/package-lock.json">
            <img className='navBarLogo img-responsive' src={logo} alt="Logo" />
          </Navbar.Brand>
          <Nav className="me-auto">

            <Link to='/' className='Pestaña'>Home</Link>
            <Link to='/gym' className='Pestaña'>Gym</Link>
            <Link to='/deportes' className='Pestaña'>deportes</Link>
            <Link to='/indumentaria' className='Pestaña'>Indumentaria</Link>
            
            
            <Link className="NavBarItems" to="../cart/cart.jsx"> <CartWidget /> </Link>
          </Nav>
          <link  href="cart" />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;