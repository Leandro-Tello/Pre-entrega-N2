import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from './CartWidget';

function NavBar(){
    return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                    <Navbar.Brand href="/">Gothic Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/Nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="/Productos">Productos</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Undefined">Undefined</NavDropdown.Item>
                            <NavDropdown.Item href="/Undefined">Undefined</NavDropdown.Item>
                            <NavDropdown.Item href="/Undefined">Undefined</NavDropdown.Item>
                        </NavDropdown>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    );
}

export default NavBar;