import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navbar.scss';
import './Navbar.css';


class NavbarHeader extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a className="brand-link" href="#brand">Shan and Kenny 2019</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={2} href="#">
              About us
            </NavItem>
            <NavItem eventKey={2} href="#">
              Wedding Details
            </NavItem>
            <NavItem eventKey={2} href="#">
              RSVP
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarHeader;
