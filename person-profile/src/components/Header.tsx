import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import AOS from "aos";

const Header: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
      <Container data-aos="fade-left" data-aos-duration="1000">
        <Navbar.Brand
          href="#home"
          className="fw-bold logo d-flex align-items-center gap-2"
        >
          <span className="poppins-medium">Allan Cordova</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto poppins-medium">
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
