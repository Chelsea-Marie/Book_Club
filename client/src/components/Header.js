import React from 'react';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header({ setCurrentPage }) {
    return (
        <div>
            <header>
            <Image src="https://www.busey.com/assets/files/NqzglPEY/Free%20Little%20Library%20Hero%20Image%20(003).jpg" fluid />
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand class="text-warning">Turn or Burn</Navbar.Brand>
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