import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navbar.scss';
import './Navbar.css';


class NavbarHeader extends Component {
  render() {
    return (
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
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
            <NavItem className="home-link" eventKey={2} href="/">
              Shan and Kenny 2019
            </NavItem>
            <NavItem eventKey={2} href="#">
              RSVP
            </NavItem>
            <NavItem eventKey={2} href="#">
              Other stuff
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarHeader;
