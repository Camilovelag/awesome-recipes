import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => (
  <Navbar className="bg-fuchsia p-3" expand="md">
    <LinkContainer to="/">
      <Navbar.Brand className="offset-1">Your Awesome Recipes</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <LinkContainer to="/home">
          <Nav.Link eventKey="1">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link eventKey="2">About</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
