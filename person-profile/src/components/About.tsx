import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <section id="about" className="py-5 text-light">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col
            md={6}
            data-aos="fade-right"
            data-aos-duration="1000"
            className="d-flex flex-column align-items-center"
          >
            <h2 className="text-primary mb-4 poppins-medium">About Me</h2>
            <p className="poppins-light">
              Hello! I'm <strong>Allan Cordova</strong>, a Full Stack Developer
              and student at UTFPR. I specialize in building responsive web
              applications using technologies like
              <strong> React, Angular, TypeScript, JavaScript</strong> and{" "}
              <strong>MySQL</strong>.
            </p>
            <p className="poppins-light">
              I'm currently diving deeper into{" "}
              <strong>data modeling, object-oriented programming</strong> and
              exploring <strong>Docker</strong> as part of my DevOps learning
              journey.
            </p>
            <p className="poppins-light">
              My goal is to grow into a developer focused on{" "}
              <strong>secure software development</strong> and eventually
              specialize in <strong>Cybersecurity</strong>.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
