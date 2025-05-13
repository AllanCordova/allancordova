import React from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/style.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <Container className="text-center py-4">
        <h5 className="footer-logo mb-3">Allan Cordova</h5>

        <div className="footer-links mb-3">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social mb-3">
          <a
            href="https://www.linkedin.com/in/allan-roberto-cordova-de-campos-7542b2331/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AllanCordova"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/allan_campos2010/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="footer-copy">
          Built with <span style={{ color: "var(--color-primary)" }}>❤️</span>{" "}
          by Allan Cordova – 2025
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
