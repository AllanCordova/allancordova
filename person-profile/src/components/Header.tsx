import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import AOS from "aos";

const Header: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      fixed="top"
      data-aos="fade-down"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold logo">
          Allan Cordova
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="link" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="link" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="link" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
