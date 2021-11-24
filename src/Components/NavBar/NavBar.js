import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
    <Navbar>
    <Container>
      <Navbar.Brand href="#home"  style={{color: 'white'}}>API Checkpoint</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text  style={{color: 'white'}}>
          Signed in as: <a href="#login"  style={{color: 'white'}}>Seifeddine Elghoul</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  );
}

export default NavBar;
