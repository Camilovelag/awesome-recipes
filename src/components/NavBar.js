import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header>
    <Navbar bg="light" expand="lg">
      <ul className="navbar-links">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/recipes/id">Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </Navbar>
  </header>
);

export default NavBar;
