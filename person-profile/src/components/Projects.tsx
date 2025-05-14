import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "Projeto 1",
    image:
      "https://res.cloudinary.com/dholbtxkp/image/upload/v1747166262/money_fqqweg.png",
    description:
      "Money Flow é um sistema feito em react, para gerenciamento financeiro",
    link: "https://github.com/AllanCordova/money-flow",
    demo: "https://allancordova.github.io/money-flow/",
  },
  {
    title: "Projeto 2",
    image:
      "https://res.cloudinary.com/dholbtxkp/image/upload/v1747167194/type_ngqrku.png",
    description:
      "repositorio com diversas resoluções, da linguagem type-script tudo orientado a objetos",
    link: "https://github.com/AllanCordova/typescript",
    demo: "https://github.com/AllanCordova/typescript",
  },
  {
    title: "Projeto 3",
    image:
      "https://res.cloudinary.com/dholbtxkp/image/upload/v1747166404/myrdal_onmox9.png",
    description:
      "Projeto robusto desenvolvido para aprendizado de conceitos básicos e avançados de POO",
    link: "https://github.com/AllanCordova/myrdal-rpg",
    demo: "https://github.com/AllanCordova/myrdal-rpg",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-primary mb-5 text-center poppins-medium fs-1">
          Projects
        </h2>
        <Row xs={1} md={2} lg={3} className="g-4 poppins-medium">
          {projects.map((project, idx) => (
            <Col
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="800"
            >
              <Card className="h-100 bg-dark text-light border-0 shadow-sm">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    style={{ cursor: "pointer" }}
                    className="card-img"
                  />
                </a>
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
                    View on GitHub
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
