import React from "react";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
const Intro: React.FC = () => {
  const fadeIn = useScrollFadeIn();

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      className="container "
    >
      <Header />
      <div {...fadeIn}>
        <h1 className="display-5 text-primary poppins-medium">
          Hi, I'm Allan{" "}
        </h1>
        <p className="lead poppins-regular">
          I'm a Full-Stack Developer passionate about clean code and beautiful
          UI. Currently studying data modeling, OOP and Docker — aiming for a
          future in Cybersecurity.
        </p>
        <div className="d-flex gap-3">
          <Button variant="outline-light" target="_blank" className="w-100">
            Get My Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
