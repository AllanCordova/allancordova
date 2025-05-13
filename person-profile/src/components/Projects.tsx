import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "Projeto 1",
    image: "https://via.placeholder.com/600x400.png?text=Projeto+1",
    description:
      "Descrição rápida do projeto 1. Pode ser uma aplicação em React.",
    link: "https://github.com/seu-usuario/projeto1",
  },
  {
    title: "Projeto 2",
    image: "https://via.placeholder.com/600x400.png?text=Projeto+2",
    description:
      "Descrição rápida do projeto 2. Pode ser um sistema com Angular.",
    link: "https://github.com/seu-usuario/projeto2",
  },
  {
    title: "Projeto 3",
    image: "https://via.placeholder.com/600x400.png?text=Projeto+3",
    description: "Outro projeto interessante com backend e banco de dados.",
    link: "https://github.com/seu-usuario/projeto3",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-primary mb-4 text-center">Projects</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project, idx) => (
            <Col
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="800"
            >
              <Card className="h-100 bg-dark text-light border-0 shadow-sm">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0">
                  <Button
                    variant="outline-light"
                    href={project.link}
                    target="_blank"
                    className="w-100"
                  >
                    View Project
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
