import React from 'react';
import { Nav, Navbar, NavLink } from "react-bootstrap";
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {
    return (
        <Navbar  collapseOnSelect expand="sm" bg="danger" variant="dark" fixed='top' mt='3'>
      <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
          <Nav>
              <NavLink  eventKey="1" as={Link} to="/">Acceuil</NavLink>
              <NavDropdown  title="Football" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1" as={Link} to="/photos">Photos</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2" as={Link} to='/videos'>Videos</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3" as={Link} to='/matchs'>Matchs</NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
              <NavLink  eventKey="3" as={Link} to="/gymnastique">Gymnastique</NavLink>
              <NavLink  eventKey="4" as={Link} to="/contact">Contact</NavLink>
              <NavLink  eventKey="5" as={Link} to="/boutique">Boutique</NavLink>

          </Nav>
      </Navbar.Collapse>     
     
  </Navbar>
 
);
}

export default Menu
