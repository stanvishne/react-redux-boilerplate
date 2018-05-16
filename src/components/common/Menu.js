import React from "react";
import { Nav, NavItem, Glyphicon, Navbar, NavDropdown, MenuItem } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

export default class Menu extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">REACT START APP</a>
          </Navbar.Brand>
        </Navbar.Header>
  
        <Nav bsStyle="pills">
          <IndexLinkContainer to="/">
            <NavItem>
              Home
            </NavItem>
          </IndexLinkContainer>
                    
          <LinkContainer to="/about">
            <NavItem>
              About <Glyphicon glyph="tasks"/>
            </NavItem>
          </LinkContainer> 
                  
        </Nav>
      </Navbar>
    );
  }
}
