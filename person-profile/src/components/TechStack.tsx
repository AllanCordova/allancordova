import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const techs = [
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

const TechStack: React.FC = () => {
  return (
    <section id="techstack" className="py-5 text-light">
      <Container>
        <h2 className="text-primary text-center mb-5" data-aos="fade-up">
          Tech Stack
        </h2>
        <Row className="g-4 justify-content-center">
          {techs.map((tech, idx) => (
            <Col
              xs={4}
              sm={3}
              md={2}
              key={tech.name}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="img-fluid mb-2"
                style={{ height: "60px" }}
              />
              <p className="text-light small">{tech.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TechStack;
