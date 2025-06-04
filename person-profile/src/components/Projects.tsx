import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const projects = [
  {
    title: "Projeto 1",
    image:
      "https://res.cloudinary.com/dholbtxkp/image/upload/v1749062364/mind-rush_hu4i1y.png",
    description:
      "Sistema de quizes, com visual retro, criado para aprender novos conceitos do Angular 19",
    link: "https://github.com/AllanCordova/mind-rush.git",
    demo: "https://allancordova.github.io/mind-rush/home",
  },
  {
    title: "Projeto 2",
    image:
      "https://res.cloudinary.com/dholbtxkp/image/upload/v1749062909/Myrdal-rpg_sybmdg.png",
    description:
      "Projeto robusto desenvolvido para aprendizado de conceitos básicos e avançados de POO",
    link: "https://github.com/AllanCordova/myrdal-rpg",
    demo: "https://github.com/AllanCordova/myrdal-rpg",
  },
  {
    title: "Projeto 3",
    image:
      "https://res.cloudinary.com/dholbtxkp/image/upload/v1749063139/money-flow_rhcykb.png",
    description:
      "Money Flow é um sistema de gerenciamento Finenceiro, feito para aprender Context API, Reducer, Routes em React",
    link: "https://github.com/AllanCordova/money-flow",
    demo: "https://allancordova.github.io/money-flow/",
  },
  {
    title: "Projeto 4",
    image:
      "https://res.cloudinary.com/dholbtxkp/image/upload/v1749063344/ts_k1lvav.png",
    description:
      "repositorio com diversas resoluções, da linguagem type-script tudo orientado a objetos",
    link: "https://github.com/AllanCordova/typescript",
    demo: "https://github.com/AllanCordova/typescript",
  },
  {
    title: "Projeto 5",
    image:
      "https://res.cloudinary.com/dholbtxkp/image/upload/v1749062545/active-tracker_b21wxj.png",
    description:
      "Sistema de Registro e Criação de treinos, dsenvolvido usando base da web / HTML5/ CSS3/ JS",
    link: "https://github.com/AllanCordova/typescript",
    demo: "https://github.com/AllanCordova/typescript",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-primary mb-5 text-center poppins-medium h1">
          Projects
        </h2>
        <Row xs={1} md={2} lg={3} className="g-4 poppins-light">
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
                  <Card.Title className="poppins-light">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="poppins-light">
                    {project.description}
                  </Card.Text>
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
