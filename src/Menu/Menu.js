import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'

class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Agence</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#pricing">Projetos</Nav.Link>
                    <Nav.Link href="#pricing">Administrativos</Nav.Link>
                    <NavDropdown title="Comercial" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Performance Comercial</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">Financeiro</Nav.Link>
                    <Nav.Link href="#pricing">Usuario</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Sair</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
}

export default Menu;