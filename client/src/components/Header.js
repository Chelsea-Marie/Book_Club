import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({setCurrentPage}) {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#Home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#" onClick={() => { setCurrentPage("Home") }}>Home</Nav.Link>
                            <Nav.Link href="#" onClick={() => { setCurrentPage("About") }}>About the book</Nav.Link>
                            <Nav.Link href="#" onClick={() => { setCurrentPage("Suggest") }}>Contact</Nav.Link>
                            <Nav.Link href="#" onClick={() => { setCurrentPage("Store") }}>Store</Nav.Link>
                            <Nav.Link href="#" onClick={() => { setCurrentPage("Login") }}>Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}

export default Header;