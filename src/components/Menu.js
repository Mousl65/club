import React from 'react';
import { Nav, Navbar, NavLink } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
          <Nav>
              <NavLink  eventKey="1" as={Link} to="/">Acceuil</NavLink>
              <NavLink  eventKey="2" as={Link} to="/football">Football</NavLink>
              <NavLink  eventKey="3" as={Link} to="/gymnastique">Gymnastique</NavLink>
              <NavLink  eventKey="4" as={Link} to="/inscription">Inscription</NavLink>

          </Nav>
      </Navbar.Collapse>     
  </Navbar>
);
}

export default Menu
