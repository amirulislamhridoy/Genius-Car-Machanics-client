import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import log from "../../../images/logo.png";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        sticky={"top"}
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img width="200" src={log} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/carousellibrary">
                Carousel
              </Nav.Link>
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#experts">Experts</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {user &&
                <>
                <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                </>
              }
              
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {!user ? (
                <Nav.Link as={Link} eventKey={2} to="/login">
                  Login
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} onClick={logout} eventKey={2} to="/login">
                  Sign Out
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
